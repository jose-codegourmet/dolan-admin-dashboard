"use client";

import MyProfileForm from "@/components/forms/my-profile-form/MyProfileForm";
import useUserSessionContext from "@/hooks/context/user-session-context";

const FormContainer = () => {
  const { activeUser } = useUserSessionContext();

  if (!activeUser) return <></>;

  return (
    <MyProfileForm
      defaultValues={{
        first_name: activeUser.first_name ?? "",
        last_name: activeUser.last_name ?? "",
        gender: activeUser.gender ?? "",
        email: activeUser.email ?? "",
        username: activeUser.username ?? "",
        avatar: activeUser.avatar?.src ?? "",
      }}
    />
  );
};

export default FormContainer;
