export default function Header() {
  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex gap-4">
        <span>Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          className="rounded-full"
        />
      </div>
    </div>
  );
}