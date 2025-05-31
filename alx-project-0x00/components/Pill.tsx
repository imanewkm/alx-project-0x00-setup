import React from "react"

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="pill">
      {title}
    </div>
  )
}

export default Pill