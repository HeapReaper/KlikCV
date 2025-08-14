type LunaProps = {
  name: string;
  email: string;
};

export default function Luna({ name, email }: LunaProps) {
  return (
    <>
      <h1 className="text-2xl font-bold">{name || "Full Name"}</h1>
      <p>{email || "your@email.com"}</p>
    </>
  );
}
