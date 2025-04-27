"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { Card,  CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  Users, 
  Mail, 
  Wallet, 
  FileCode, 
  Filter,
  ChevronDown
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Novus from "@/public/novus-logo-and-name.svg"
import Abstract3d from "@/public/abstract-3d.svg"

interface User {
  _id: string
  email: string
  address?: string
  createdAt: string
}

const dotVariants: Variants = {
  jump: {
    y: -20,
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Helper function to determine connection type
const getConnectionType = (user: User) => {
  // Check if email is likely an OCID (contains specific pattern or domain)
  const isOCID = user.email.includes('ocid:') || user.email.includes('@opencampus');
  
  if (user.address && isOCID) return "Multiple";
  if (user.address) return "Wallet";
  if (isOCID) return "OCID";
  return "Email";
}

// Helper to get proper badge styles for connection types
const getConnectionBadgeStyles = (type: string) => {
  switch (type) {
    case "Wallet":
      return "bg-[#F36E15]/20 text-[#F36E15] border-0";
    case "OCID":
      return "bg-[#534CFF]/20 text-[#534CFF] border-0";
    case "Multiple":
      return "bg-[#F342E8]/20 text-[#F342E8] border-0";
    default:
      return "bg-[#21FFD6]/20 text-[#21FFD6] border-0";
  }
}

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [connectionFilter, setConnectionFilter] = useState<string[]>([])

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true)
     
        const response = await fetch("https://novus-fe.vercel.app/api/waitlist", {
          cache: "no-store",
          next: { revalidate: 0 },
        })

        if (!response.ok) {
          throw new Error(`Failed to fetch users: ${response.status}`)
        }

        const data = await response.json()
        setUsers(data.users || [])
        setError(null)
      } catch (error) {
        console.error("Error fetching users:", error)
        setError("Failed to load users. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  // Connection stats
  const connectionStats = {
    email: users.filter(user => getConnectionType(user) === "Email").length,
    wallet: users.filter(user => getConnectionType(user) === "Wallet" || getConnectionType(user) === "Multiple").length,
    ocid: users.filter(user => getConnectionType(user) === "OCID" || getConnectionType(user) === "Multiple").length,
  }

  // Filter users based on search term and connection filter
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.address && user.address.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (connectionFilter.length === 0) return matchesSearch;
    
    const connectionType = getConnectionType(user);
    return matchesSearch && connectionFilter.includes(connectionType);
  });

  // Toggle connection filter
  const toggleConnectionFilter = (type: string) => {
    setConnectionFilter(prev => 
      prev.includes(type)
        ? prev.filter(item => item !== type)
        : [...prev, type]
    );
  }

  return (
    <div className="relative w-full min-h-screen py-[40px] px-4 sm:px-8 lg:px-[110px] gradient-background bg-black">
      {/* Logo */}
      <div className="mb-8">
        <Image src={Novus || "/placeholder.svg"} alt="novus" />
      </div>

      {/* Bottom Blur */}
      <div className="absolute bottom-0 left-8 h-[500px] w-[450px] blur-[80px] rounded-full bg-gradient-to-tr from-transparent to-[#21FFD6] opacity-20 pointer-events-none z-0" />

      {/* Top Blur */}
      <div className="absolute top-0 right-8 h-[500px] w-[450px] blur-[80px] rounded-full bg-gradient-to-tr from-transparent to-[#534CFF] opacity-30 pointer-events-none z-0" />

      {/* Abstract Art */}
      <motion.div animate="jump" transition={{ staggerChildren: -0.2, staggerDirection: -1 }} className="w-[90%]">
        <motion.div
          className="will-change-transform absolute right-0 bottom-0 lg:right-[150px] lg:bottom-[100px] z-0 opacity-40"
          variants={dotVariants}
        >
          <Image src={Abstract3d || "/placeholder.svg"} alt="abstract" />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div className="relative z-10" initial="hidden" animate="visible" variants={staggerContainer}>
        {/* Header */}
        <motion.div className="mb-10" variants={fadeInUp}>
          <h1 className="text-4xl font-extrabold">
            Waitlist{" "}
            <span className="bg-gradient-to-r from-[#F36E15] to-[#74DB89] bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-[#CED0E4] mt-2">View and manage users signed up for your product waitlist.</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <Card className="bg-white/10 backdrop-blur-md border-0 shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#534CFF]/20 to-transparent opacity-50"></div>
              <CardHeader className="relative">
                <CardDescription className="text-[#CED0E4]">Total Users</CardDescription>
                <CardTitle className="text-3xl flex items-center gap-2 text-white">
                  <Users className="text-[#534CFF] h-5 w-5" />
                  {users.length}
                </CardTitle>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="bg-white/10 backdrop-blur-md border-0 shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#21FFD6]/20 to-transparent opacity-50"></div>
              <CardHeader className="relative">
                <CardDescription className="text-[#CED0E4]">Email Only</CardDescription>
                <CardTitle className="text-3xl flex items-center gap-2 text-white">
                  <Mail className="text-[#21FFD6] h-5 w-5" />
                  {connectionStats.email}
                </CardTitle>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="bg-white/10 backdrop-blur-md border-0 shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F36E15]/20 to-transparent opacity-50"></div>
              <CardHeader className="relative">
                <CardDescription className="text-[#CED0E4]">Wallet Connected</CardDescription>
                <CardTitle className="text-3xl flex items-center gap-2 text-white">
                  <Wallet className="text-[#F36E15] h-5 w-5" />
                  {connectionStats.wallet}
                </CardTitle>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="bg-white/10 backdrop-blur-md border-0 shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#534CFF]/20 to-transparent opacity-50"></div>
              <CardHeader className="relative">
                <CardDescription className="text-[#CED0E4]">OCID Connected</CardDescription>
                <CardTitle className="text-3xl flex items-center gap-2 text-white">
                  <FileCode className="text-[#534CFF] h-5 w-5" />
                  {connectionStats.ocid}
                </CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8" variants={fadeInUp}>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Input
              type="text"
              placeholder="Search by email or wallet address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-[300px] bg-white/10 text-white border-0 placeholder:text-[#CED0E4]"
            />
            <Search className="text-[#CED0E4]" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-white/10 text-white border-white/10">
                <Filter className="h-4 w-4 mr-2" /> Filter <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black border-white/10">
              {["Email", "Wallet", "OCID", "Multiple"].map((type) => (
                <DropdownMenuCheckboxItem
                  key={type}
                  checked={connectionFilter.includes(type)}
                  onCheckedChange={() => toggleConnectionFilter(type)}
                  className="text-white hover:bg-white/10"
                >
                  {type}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>

        {/* Users Table */}
        <motion.div variants={fadeInUp}>
          {isLoading ? (
            <p className="text-center text-[#CED0E4]">Loading users...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : filteredUsers.length === 0 ? (
            <p className="text-center text-[#CED0E4]">No users found.</p>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-white/10">
              <Table className="min-w-full bg-white/5 text-white">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[#CED0E4]">Email</TableHead>
                    <TableHead className="text-[#CED0E4]">Wallet Address</TableHead>
                    <TableHead className="text-[#CED0E4]">Connection</TableHead>
                    <TableHead className="text-[#CED0E4]">Joined</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => {
                    const connectionType = getConnectionType(user);
                    return (
                      <TableRow key={user._id}>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.address || "-"}</TableCell>
                        <TableCell>
                          <Badge className={getConnectionBadgeStyles(connectionType)}>
                            {connectionType}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}