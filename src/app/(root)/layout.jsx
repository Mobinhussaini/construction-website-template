

export default function RootLayout({
  children,
}) {
  return (
      <div
        className={"flex justify-center items-center px-12 lg:px-36 py-24 bg-gray-100 lg:py-36"}
      >
        {children}
      </div>
  );
}
