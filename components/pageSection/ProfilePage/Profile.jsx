"use client";
import Button from "@/components/global/Button";
import PhoneInput from "@/components/global/PhoneInput";
import TextInput from "@/components/global/TextInput";
import { useAuth } from "@/utils/functions";
import React, { useState } from "react";
import { FetchApi } from "@/utils/FetchApi";

const Profile = () => {
  const { auth, setAuth } = useAuth();

  const handleSaveProfile = async (e) => {
    e.preventDefault()
    console.log(e.target.name.value)
    const profileData = {
        name: e.target.name.value,
        dob: e.target.dob.value,
    }
    try {
      const { data } = await FetchApi({
        url: `/customer/api/update_profile/${auth?.customer?.id}/`,
        method: "put",
        body: profileData,
        isToast: true
      });
      //   setAuth(data);
      console.log(data);
      console.log("Profile updated successfully:", data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="border border-[#EEEEEE] rounded-xl p-4">
      <form onSubmit={handleSaveProfile}>
        <p className="text-xl font-medium">Profile</p>
        <p className="text-xs text-[#7f7f7f]">
          Place to edit your information.
        </p>
        <div className="py-3 space-y-2">
          <TextInput
            label={"Name"}
            rounded="full"
            name="name"
            value={auth.name}
          />
          <div className="flex w-full gap-3">
            <div className="w-1/2">
              <PhoneInput
                label={"Phone number"}
                rounded="full"
                name="phone_number"
                value={auth.phone_number}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                label={"Date of birth"}
                rounded="full"
                type="date"
                name="dob"
                value={auth.dob}
              />
            </div>
          </div>
          <div className="pt-3">
            <Button
              className={"w-full !rounded-full"}
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
