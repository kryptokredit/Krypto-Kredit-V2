import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Text } from "@chakra-ui/react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className='container'>
      <div className='not-found'>
        <Text fontSize='3xl'>Oooops...</Text>
        <Text fontSize='3xl'>That page cannot be found.</Text>
        <p>
          Go back to the <Link href='/'>Home</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
