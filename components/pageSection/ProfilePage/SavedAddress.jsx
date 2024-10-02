"use client";
import Button from "@/components/global/Button";
import React, { useEffect, useRef, useState } from "react";
import Address from "./Address";
import Modal from "@/components/global/Modal";
import useClickOutside from "@/hooks/useClickOutside";
import { FetchApi } from "@/utils/FetchApi";
import { useAuth } from "@/utils/functions";
import { jwtDecode } from "jwt-decode";

const SavedAddress = () => {
  const [page, setPage] = useState("");
  const [editAddressValue, setEditAddressValue] = useState(null);
  const { auth } = useAuth();
  const delModalRef = useRef();
  const [delModalOpen, setDelModalOpen] = useState(false);
  const [addressToDelete, setAddressToDelete] = useState(null);
  const [refetchAddress, setrefetchAddress] = useState(0);
  const [defaultAddress, setDefaultAddress] = useState(Number(localStorage.getItem('default_address')));
  useClickOutside(delModalRef, () => {
    setDelModalOpen(false);
  });
  const [address, setAddress] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await FetchApi({
          url: `/customer/api/get_all_address/${auth.customer.id}`,
        });
        setAddress(data.payload);
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };
    loadData();
  }, [refetchAddress]);

  const handleAddNewAddress = async (newAddress) => {
    try {
      const { data } = await FetchApi({
        url: `/customer/api/add_address/${auth.customer.id}/`,
        method: "post",
        body: newAddress,
        isToast: true,
      });
      setAddress([...address, data.payload]);
      setPage("");
    } catch (error) {
      console.error("Error adding new address:", error);
    }
  };

  const handleEditAddress = async (updatedAddress) => {
    try {
      const { data } = await FetchApi({
        url: `/customer/api/edit_address/${updatedAddress.id}/`,
        method: "put",
        body: updatedAddress,
        isToast: true,
      });
      setAddress(
        address.map((addr) => (addr.id === updatedAddress.id ? data : addr))
      );
      setPage("");
      console.log(updatedAddress);
    } catch (error) {
      console.error("Error editing address:", error);
    }
  };

  const handleDeleteAddress = async () => {
    try {
      await FetchApi({
        url: `/customer/api/delete_address/${addressToDelete.id}/`,
        method: "delete",
        isToast: true,
      });
      setAddress(address.filter((addr) => addr.id !== addressToDelete.id));
      setDelModalOpen(false);
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };
  const refetchAdrs = () => {
    setrefetchAddress(Math.random());
  };
  return (
    <div>
      {page === "add" ? (
        <Address
          onSubmit={handleAddNewAddress}
          setPage={setPage}
          title={"Add new Address"}
        />
      ) : page === "edit" ? (
        <Address
          onSubmit={handleEditAddress}
          setPage={setPage}
          refetch={refetchAdrs}
          title={"Edit address"}
          value={editAddressValue}
        />
      ) : (
        page === "" && (
          <>
            <div className="flex items-center justify-between">
              <p className="text-xl font-medium">Saved Address</p>
              <Button
                variant="outline"
                rounded="full"
                className={"font-medium"}
                size="sm"
                onClick={() => setPage("add")}
              >
                Add new Address
              </Button>
            </div>
            {address.map((addr, index) => (
              <div
                key={index}
                className="border rounded-xl border-[#EEEEEE] p-4 mt-3"
              >
                <div className="text-sm font-medium">
                  <p className="text-lg font-bold">{addr.name}</p>
                  <div className="flex mt-5 gap-20">
                    <div>
                      <p className="text-[#7f7f7f] font-medium">Phone number</p>
                      <p>{addr.phone_number}</p>
                    </div>
                    <div>
                      <p className="text-[#7f7f7f]">Area</p>
                      <p>{addr.area}</p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-[#7f7f7f] font-medium">
                      Delivery address
                    </p>
                    <p>{addr.address}</p>
                  </div>
                </div>
                <div className="mt-5 flex gap-4">
                  <Button
                    variant="outline"
                    rounded="full"
                    className={"font-medium w-1/3 !border-[#EEEEEE]"}
                    size="sm"
                    onClick={() => {
                      setAddressToDelete(addr);
                      setDelModalOpen(true);
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outline"
                    rounded="full"
                    className={"font-medium w-1/3 !border-[#EEEEEE]"}
                    size="sm"
                    onClick={() => {
                      setEditAddressValue(addr);
                      setPage("edit");
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    rounded="full"
                    className={
                      "font-medium w-1/3 !border-[#EEEEEE] bg-black text-white"
                    }
                    disabled={defaultAddress === addr.id}
                    size="sm"
                    onClick={() => {
                      localStorage.setItem('default_address', addr.id)
                      setDefaultAddress(addr.id)
                    }}
                  >
                    Set default
                  </Button>
                </div>
              </div>
            ))}
          </>
        )
      )}
      <Modal open={delModalOpen}>
        <div ref={delModalRef}>
          <p>Are you sure to delete this address?</p>
          <div className="flex gap-3 mt-4">
            <Button className={"w-1/2"} onClick={() => setDelModalOpen(false)}>
              Cancel
            </Button>
            <Button className={"w-1/2"} onClick={handleDeleteAddress}>
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SavedAddress;
