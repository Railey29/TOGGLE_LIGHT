import Link from "next/link";

const MyComponent = () => {
  return (
    <div>
      {/* Use the Link component for client-side navigation */}
      <Link href="/NextSample">
        <a>About Us</a>
      </Link>
    </div>
  );
};

export default MyComponent;
