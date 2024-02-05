import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../formValidationSchema";
import { countryListData } from "../../countryCodeData";
import { DevTool } from "@hookform/devtools";

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      return {
        username: data.username,
        email: data.email,
        gender: "",
        password: "",
        conformPassword: "",
        country: "",
        social: {
          twitter: "",
          facebook: "",
        },
        phoneNumber: ["", ""],
        skills: [{ skill: "" }],
      };
    },
  });

  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const { fields, append, remove } = useFieldArray({
    name: "skills",
    control,
  });

  function handleCountryChange(event) {
    const selectedCountryValue = event.target.value;
    setSelectedCountry(selectedCountryValue);
    const selectedCountryData = countryListData.find(
      (country) => country.value === selectedCountryValue
    );
    setCountryCode(selectedCountryData?.code || "");
  }

  function onSubmit(data, e) {
    console.log("form submitted", data);
    e.target.reset();
    reset();
  }

  const countryList = countryListData.map((country) => (
    <option key={country.code} value={country.value}>
      {country.label}
    </option>
  ));

  return (
    <>
      <div className="Form-container">
        <form
          onSubmit={handleSubmit((data, e) => onSubmit(data, e))}
          noValidate
        >
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} />
          <p className="error">{errors.username?.message}</p>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>

          <div className="country">
            <label htmlFor="country">Country: </label>
            <p>{countryCode ? countryCode : "+0"}</p>
            <select
              {...register("country")}
              onChange={handleCountryChange}
              value={selectedCountry}
            >
              <option value="" disabled>
                Select Country
              </option>
              {countryList}
            </select>
            <p className="error">{errors.country?.message}</p>
          </div>

          <label htmlFor="email">Password</label>
          <input type="password" id="password" {...register("password")} />
          <p className="error">{errors.password?.message}</p>

          <label htmlFor="email">Confirm Password</label>
          <input
            type="password"
            id="consform-password"
            {...register("conformPassword")}
          />
          <p className="error">{errors.conformPassword?.message}</p>

          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register("social.twitter")} />

          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register("social.facebook")} />

          <label htmlFor="primary-number">Primary Number</label>
          <input
            type="text"
            id="primary-number"
            {...register("phoneNumber[0]")}
          />

          <label htmlFor="secondary-number">Secondary Number</label>
          <input
            type="text"
            id="secondary-number"
            {...register("phoneNumber[1]")}
          />

          <div>
            <label htmlFor="skills">Enter Your Skills</label>
            <div>
              {fields.map((field, index) => {
                return (
                  <div key={field.id}>
                    <input
                      type="text"
                      {...register(`skills[${index}].skill`)}
                    />
                    {index > 0 && (
                      <button type="button" onClick={() => remove(index)}>
                        X
                      </button>
                    )}
                  </div>
                );
              })}
              <button type="button" onClick={() => append({ skill: "" })}>
                Add SKill
              </button>
            </div>
          </div>

          <div className="gender">
            <span>Gender:</span>
            <div className="gender-input">
              <input type="radio" value="male" {...register("gender")} />
              <label htmlFor="gender">Male</label>
            </div>

            <div className="gender-input">
              <input type="radio" value="female" {...register("gender")} />
              <label htmlFor="gender">Female</label>
            </div>
            <p className="error">{errors.gender?.message}</p>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <DevTool control={control} />
    </>

    // <div className="Form-container">
    //   <form onSubmit={handleSubmit(onSubmit)} noValidate>
    //     <label htmlFor="username">Username</label>
    //     <input
    //       type="text"
    //       id="username"
    //       {...register("username", {
    //         required: {
    //           value: true,
    //           message: "username is required",
    //         },
    //       })}
    //     />
    //     <p className="error">{errors.username?.message}</p>

    //     <label htmlFor="email">Email</label>
    //     <input
    //       type="email"
    //       id="email"
    //       {...register("email", {
    //         required: "email is required",
    //         pattern: {
    //           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
    //           message: "invalid email adress",
    //         },
    //         validate: {
    //           NotAdmin: (fieldValue) => {
    //             return (
    //               fieldValue !== "admin@example.com" ||
    //               "Enter Different Email Address"
    //             );
    //           },
    //           NotBlackListed: (fieldValue) => {
    //             return (
    //               !fieldValue.endsWith("baddomain.com") ||
    //               "This domain is not supported"
    //             );
    //           },
    //         },
    //       })}
    //     />
    //     <p className="error">{errors.email?.message}</p>
    //     <button>Submit</button>
    //   </form>
    // </div>
  );
}

export default ReactHookForm;
