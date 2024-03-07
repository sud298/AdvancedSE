import React from "react";
import { AllCards, ComponentLoading } from "../../components";
import { useGetBlogsQuery } from "../../features/blog/blogApiSlice";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const index = () => {
  const { data, isLoading } = useGetBlogsQuery();
  const user = useAuth();
  useTitle("CulinaryHub - My Blogs");

  const updatedData = data?.filter((obj) => obj.author._id === user?.userId);

  return (
    <>
      {isLoading ? (
        <ComponentLoading />
      ) : (
        <AllCards
          mainTitle={"Your CulinaryHub Chronicles"}
          tagline={
            "Dive into a world of your engaging articles and captivating stories on CulinaryHub Chronicles."
          }
          type={"blog"}
          data={updatedData}
        />
      )}
    </>
  );
};

export default index;
