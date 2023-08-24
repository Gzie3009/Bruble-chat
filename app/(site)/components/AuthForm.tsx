"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useCallback, useState } from "react";
import Input from "@/app/components/input/Input";

type Props = {};
type Variant = "LOGIN" | "REGISTER";
export default function AuthForm({}: Props) {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toggleVariant = useCallback(() => {
    variant === "LOGIN" ? setVariant("REGISTER") : setVariant("LOGIN");
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      //axios register
    }
    if (variant === "LOGIN") {
      //axios login
    }
  };
  const socialAction = (action: string) => {
    setIsLoading(true);
    //next-auth social signin
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        className="
    bg-white
    px-4
    py-8
    shadow
    sm:rounded-lg
    sm:px-10
    "
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email" id="email" register={register} errors={errors} />
        </form>
      </div>
    </div>
  );
}
