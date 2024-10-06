"use client";
import Button from "@/components/global/Button";
import PhoneInput from "@/components/global/PhoneInput";
import TextInput from "@/components/global/TextInput";
import { useAuth } from "@/utils/functions";
import React, { useEffect, useState } from "react";
import { FetchApi } from "@/utils/FetchApi";

const Profile = () => {
  const { auth, refetchAuth } = useAuth();

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    const profileData = {
      name: e.target.name.value,
      dob: e.target.dob.value,
      email: e.target.email.value
    };
    try {
      const { data } = await FetchApi({
        url: `/customer/api/update_profile/${auth?.customer?.id}/`,
        method: "put",
        body: profileData,
        isToast: true,
        callback: () => {
          refetchAuth();
        },
      });
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
            defaultValue={auth?.customer?.name}
          />
          <div className="flex w-full gap-3">
            <div className="w-1/2">
              <PhoneInput
                label={"Phone number"}
                rounded="full"
                name="phone_number"
                value={auth?.customer?.phone_number}
                disabled={true}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                label={"Email address"}
                rounded="full"
                type="email"
                name="email"
                defaultValue={auth?.customer?.email}
              />
            </div>
          </div>
          <div className="w-1/2">
            <TextInput
              label={"Date of birth"}
              rounded="full"
              type="date"
              name="dob"
              value={auth?.customer?.dob}
            />
          </div>
          <div className="pt-3">
            <Button className={"w-full !rounded-full"}>Save</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
