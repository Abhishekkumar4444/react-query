import React from "react"
import Axios from "axios"
import { useQuery } from "@tanstack/react-query"

function Home() {
  const {
    isLoading,
    error,
    data: catData, //rename data name
    refetch,
  } = useQuery(["repodata"], async () => {
    const res = await Axios.get("https://catfact.ninja/fact")
    return res.data
  })

  if (isLoading) {
    return <h1> Loading... </h1>
  }
  if (error) {
    return <h1> {error.message}</h1>
  }
  return (
    <>
      <h1>Home page</h1>
      <h3 style={{ color: "green" }}>{catData?.fact}</h3>
      <button onClick={refetch}>Updated data</button>
    </>
  )
}

export default Home
