import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const ServicesSection = () => {
  const services = [
    {
      title: "International Presence",
      image:
        "https://storage.googleapis.com/s.mkswft.com/RmlsZTpmNjhjZjFjMC1lMDhjLTRiZTgtYTEzZS03MmI5YjMxZjYyOWE=/Int-Presence%20(1).webp",
      description:
        "We are the preferred supplier of bearings and engineering spares to customers in over 110 countries. With our 1,000,000 products in stock, we regularly deliver anywhere in the world within 1-3 working days.",
    },
    {
      title: "Professional Team",
      image:
        "https://storage.googleapis.com/s.mkswft.com/RmlsZTo3M2RjNGExYy1iNzlkLTQ5MWQtODBmZS0xY2NlNDZlNDY2MGE=/Prof-Team.png",
      description:
        "Every member of our team undertakes training as part of their continuous professional development, ensuring we can provide the best service to all our customers across the world.",
    },
    {
      title: "Warehouse & Logistics",
      image:
        "https://storage.googleapis.com/s.mkswft.com/RmlsZToxOTE4NWQ3OC1lZDZmLTQyNTQtOWQ0ZS0yMDAxOWQ1YzVjY2Y=/Warehouse-Logistics.png",
      description:
        "We're an award winning business, with full ISO 9001:2015 accreditation. Working with our delivery partners, including DHL and UPS we take great pride in our 99.8% success rate on order delivery.",
    },
    {
      title: "Customer Service",
      image:
        "https://storage.googleapis.com/s.mkswft.com/RmlsZTpjYzI0MTg1My1mMmI2LTRhMTUtOGI2Mi1kOTVmNTEzZGQyYzY=/Cust-Serv.png",
      description:
        "With more than 75 years' industry experience as a bearings supplier, our team has expert product knowledge. Any customer queries are handled within 2 hours during working days and 24 hours outside of this.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Other Services We Offer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card key={index} shadow="sm" className="h-full">
            <CardBody className="overflow-visible p-0 flex flex-col items-center">
              <Image
                shadow="sm"
                radius="lg"
                width={175}
                height={175}
                alt={service.title}
                className="w-full object-cover p-4"
                src={service.image}
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col items-start">
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-default-500">{service.description}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
