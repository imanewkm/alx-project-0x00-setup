import React from "react"
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="pill">
      {title}
    </div>
  )
}

export default Pill