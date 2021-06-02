import React from "react";
import { useGetUser } from "../helpers/useRequest";
import Avatar from "./shared/Avatar";

const ProfileTile = () => {
  const { data } = useGetUser();

  return (
    <div className="flex items-center space-x-3 p-3 rounded-xl bg-blueGray-300 dark:bg-blueGray-600">
      <Avatar
        src={
          data &&
          (data.picture ||
            "https://firebasestorage.googleapis.com/v0/b/sailtrack-pwa-af986.appspot.com/o/avatar.png?alt=media&token=5dba1d3f-5694-49fa-a2fd-7b19258154a6")
        }
      />
      <div>
        <p className="text-xs font-semibold">{data && data.name}</p>
        <p className="text-xs">{data && data.email}</p>
      </div>
    </div>
  );
};

export default ProfileTile;
