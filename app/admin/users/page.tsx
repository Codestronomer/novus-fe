"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Users, Calendar, ArrowUpRight } from "lucide-react"

import Novus from "@/public/novus-logo-and-name.svg"
import Abstract3d from "@/public/abstract-3d.svg"

interface User {
  _id: string
  email: string
  twitter?: string
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

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true)
        // Use relative URL for API calls to avoid CORS issues
        const response = await fetch("/api/waitlist", {
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

  // Filter users based on search term
  const filteredUsers = users.filter((user) => user.email.toLowerCase().includes(searchTerm.toLowerCase()))

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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#F342E8]/20 to-transparent opacity-50"></div>
              <CardHeader className="relative">
                <CardDescription className="text-[#CED0E4]">Twitter Connected</CardDescription>
                <CardTitle className="text-3xl flex items-center gap-2 text-white">
                  <ArrowUpRight className="text-[#F342E8] h-5 w-5" />
                  {users.filter((user) => user.twitter).length}
                </CardTitle>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="bg-white/10 backdrop-blur-md border-0 shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#21FFD6]/20 to-transparent opacity-50"></div>
              <CardHeader className="relative">
                <CardDescription className="text-[#CED0E4]">Last Joined</CardDescription>
                <CardTitle className="text-3xl flex items-center gap-2 text-white">
                  <Calendar className="text-[#21FFD6] h-5 w-5" />
                  {users.length > 0 ? new Date(users[0].createdAt).toLocaleDateString() : "N/A"}
                </CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.div>

        {/* Table Section */}
        <motion.div variants={fadeInUp}>
          <Card className="bg-white/30 backdrop-blur-md border-0 shadow-2xl overflow-hidden">
            <CardHeader className="pb-4 border-b border-white/10">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-xl text-white">Waitlist Users</CardTitle>
                  <CardDescription className="text-[#CED0E4]">List of users who joined your waitlist.</CardDescription>
                </div>
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#9F9F9F]" />
                  <Input
                    placeholder="Search users..."
                    className="pl-10 bg-white border-0 text-black placeholder:text-[#9F9F9F]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-16 text-center text-[#CED0E4]">
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-4 bg-white/20 rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-white/20 rounded"></div>
                        <div className="h-4 bg-white/20 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-16 text-center text-[#CED0E4]">
                  <p className="text-red-400">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-[#534CFF] rounded-lg text-white"
                  >
                    Retry
                  </button>
                </div>
              ) : filteredUsers.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center text-[#CED0E4]">
                  {searchTerm ? (
                    <>
                      <Search className="h-14 w-14 mb-4 text-[#534CFF]" />
                      <p>No users match your search.</p>
                    </>
                  ) : (
                    <>
                      <Users className="h-14 w-14 mb-4 text-[#534CFF]" />
                      <p>No users yet.</p>
                    </>
                  )}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-white/10">
                        <TableHead className="text-[#CED0E4]">Email</TableHead>
                        <TableHead className="text-[#CED0E4]">Twitter</TableHead>
                        <TableHead className="text-[#CED0E4]">Joined</TableHead>
                        <TableHead className="text-[#CED0E4] text-right">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers.map((user: User) => {
                        const joinedDate = new Date(user.createdAt)
                        const today = new Date()
                        const diffTime = Math.abs(today.getTime() - joinedDate.getTime())
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

                        return (
                          <TableRow key={user._id} className="border-white/10 hover:bg-[#534CFF]/10 transition">
                            <TableCell className="text-white">{user.email}</TableCell>
                            <TableCell className="text-white">
                              {user.twitter ? (
                                <span className="text-[#F342E8]">@{user.twitter}</span>
                              ) : (
                                <span className="text-[#CED0E4]">-</span>
                              )}
                            </TableCell>
                            <TableCell className="text-white">
                              <div className="flex flex-col">
                                <span>{joinedDate.toLocaleDateString()}</span>
                                <span className="text-xs text-[#CED0E4]">
                                  {diffDays === 0 ? "Today" : `${diffDays} day${diffDays > 1 ? "s" : ""} ago`}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <Badge
                                className={
                                  diffDays < 3
                                    ? "bg-[#534CFF]/20 text-[#21FFD6] border-0"
                                    : "bg-white/10 text-[#CED0E4] border-0"
                                }
                              >
                                {diffDays < 3 ? "New" : "Active"}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
