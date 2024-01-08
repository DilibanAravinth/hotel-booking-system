import React from "react";

type HeadingProps = {
  readonly title: string;
};

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return <h3 className="font-semibold">{title}</h3>;
};

export default Heading;
