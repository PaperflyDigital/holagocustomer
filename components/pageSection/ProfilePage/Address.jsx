import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import Button from "@/components/global/Button";
import PhoneInput from "@/components/global/PhoneInput";
import TextInput from "@/components/global/TextInput";

const AddNewAddress = ({refetch=() => {}, setPage, value = {}, title, onSubmit }) => {
  const [name, setName] = useState(value.name || "");
  const [phone, setPhone] = useState(value.phone_number || "");
  const [address, setAddress] = useState(value.address || "");
  const [area, setArea] = useState(value.area || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    let newAddress;
    if(!value?.id){
      newAddress = { name, phone_number: phone, address, area }
    }else {
      newAddress = { id: value.id, name, phone_number: phone, address, area }

    }
    refetch()
    onSubmit(newAddress);
  };
  return (
    <div>
      <IoArrowBack
        size={30}
        onClick={() => setPage("")}
        className="cursor-pointer"
      />

      <p className="text-xl font-medium">{title}</p>
      <p className="text-sm text-[#7f7f7f]">Please input your new address</p>
      <p className="font-medium mt-4 text-[18px]">Shipping address</p>
      <form onSubmit={handleSubmit} className="space-y-2 mt-5">
        <TextInput
          label={"Address name"}
          rounded="full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <PhoneInput
          label={"Phone number"}
          rounded="full"
          value={phone}
          onChange={(combinedValue) => setPhone(combinedValue)}
        />
        <TextInput
          label={"Address"}
          rounded="full"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextInput
          label={"Area"}
          rounded="full"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <Button type="submit" className="w-full" rounded="full">
          Save
        </Button>
      </form>
    </div>
  );
};

export default AddNewAddress;
