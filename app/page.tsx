"use client";

import { useState, useEffect } from "react";
import { User } from "@/types/types";

import UserList from "@/components/user-lists";
import Search from "@/components/search";
import Pagination from "@/components/pagination";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);
  const [totalUsers, setTotalUsers] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setAllUsers(data);
      setTotalUsers(data.length);
      setUsers(data.slice(0, usersPerPage));
    };

    fetchUsers();
  }, [usersPerPage]);

  useEffect(() => {
    const filteredUsers = allUsers.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setTotalUsers(filteredUsers.length);
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    setUsers(filteredUsers.slice(startIndex, endIndex));
  }, [searchQuery, currentPage, usersPerPage, allUsers]);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalUsers / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <Separator />
      <div className="my-8">
        <UserList users={users} searchQuery={searchQuery} />
      </div>
      <Pagination
        handleNextPage={handleNextPage}
        currentPage={currentPage}
        handlePreviousPage={handlePreviousPage}
      />
    </>
  );
}
