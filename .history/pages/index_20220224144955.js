import Link from "next/link";
import Image from "next/image";
import {Flex,Box,Text,Button} from "@chakra-ui/react";
import { baseURL,fetchAPI } from "../utils/fetchApi";
import Property from "../components/Property";


const Banner=({purpose,title1,title2,linkName,buttonText,desc1,desc2,imageUrl})=>{
  return(
<Flex flexWrap="wrap" justifyContent="center" alignItems="center" margin={10}>
  <Image src={imageUrl} width={500} height={300} alt="banner"></Image>
  <Box p="5">
    <Text color="gray.500" fontSize="sm" fontWeight={"medium"} >{purpose}</Text>
    <Text color="gray.500" fontSize="3xl" fontWeight={"bold"} >{title1} <br /> {title2}</Text>
    <Text color="gray.700" fontSize="lg" paddingTop={"3"} pb={"3"} >{desc1} <br /> {desc2} </Text>
    <Button fontSize={"xl"} py={3}>
<Link href={linkName}>{buttonText}</Link>

    </Button>
  </Box>
</Flex>)
}

export default function Home({propertiesForRent,propertiesForSale}) {
  return (
    <Box>
      <Banner 
      purpose={'RENT A HOME'}
      title1={"Renal Homes for"}
      title2={"EveryOne"}
      desc1={"Explore Apartments, Villas, Homes"}
      desc2={"and more"}
      buttonText={"Explore Renting"}
      linkName={"/search?purpose=for-rent"}
      imageUrl={"https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"}
      />
      <Flex flexWrap='wrap' justifyItems={"center"} alignItems={"center"} >
      {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
 <Banner 
      purpose={'Buy A HOME'}
      title1={"Find Buy & Own your"}
      title2={"Dream Home"}
      desc1={"Explore Apartments, Villas, Homes"}
      desc2={"and more"}
      buttonText={"Explore Buying"}
      linkName={"/search?purpose=for-sale"}
      imageUrl={"https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"}
      />
 <Flex flexWrap='wrap'>
      {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
</Box>


  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchAPI(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchAPI(`${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale.hits,
      propertiesForRent: propertyForRent.hits,
    },
  };
}