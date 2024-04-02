import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, TextArea, Input, Text } from "../../components";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import PriceComponent from "../../components/PriceComponent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader';


export default function DesktopOnePage() {
  const [loading, setLoading] = useState(false);

  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_cm3s143', 'template_2cazpcb', e.target, 'lfizIiassP5-pOxsS')
      .then((result) => {
        console.log(result.text);
        console.log(result)
        toast.success('Message sent successfully');
      e.target.reset();
      }, (error) => {
        console.log(error.text);
        toast.error('Failed to send message');
      }).finally(() => setLoading(false));
  }

  return (
    <>
      <Helmet>
        <title>Yogesh Yavgesh Poul Patil's Application3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col items-center justify-center bg-black-900 pb-[510px] md:pb-5">
        <div className="flex h-[936px] flex-col items-start gap-[604px] self-stretch bg-[url(/public/images/img_mask_group.png)] bg-cover bg-no-repeat pb-[27px] md:h-auto md:gap-[453px] sm:gap-[302px] sm:pb-5">
          <Navbar className="flex items-center justify-center self-stretch bg-gray-800_9e px-[21px] pt-[21px] sm:px-5 sm:pt-5" />
          <div className="ml-[55px] flex w-[43%] items-center md:ml-0 md:w-full md:flex-col md:p-5">
            <Heading size="xl" as="h1" className="text-shadow-ts w-[48%] !font-arial uppercase md:w-full">
              <span className="font-berlinsansfbdemi text-white-A700">DO</span>
              <span className="font-berlinsansfbdemi text-white-A700 line-through">
                <>
                  N’T
                  <br />
                  Qu
                </>
              </span>
              <span className="font-berlinsansfbdemi text-white-A700">it</span>
            </Heading>
            <Img
              src="images/img_vector.svg"
              alt="vector_one"
              className="mb-[19px] h-[68px] w-[52%] self-end rounded-[20px] md:w-full"
            />
          </div>
        </div>
        <div className="mx-auto mt-[76px] flex w-full max-w-[1374px] flex-col items-center gap-[70px] md:gap-[52px] md:p-5 sm:gap-[35px]">
          <Heading size="lg" as="h2" className="text-center !font-inriaserif !font-bold capitalize">
            what you get here
          </Heading>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(337px_,_1fr))] justify-center gap-[190px] self-stretch">
            <Card name={'work out'} imageSrc={'images/img_rectangle_3.png'} className="flex w-full flex-col items-center" />
            <Card name={'Gym Wear'} imageSrc={'images/img_rectangle_4.png'} className="flex w-full flex-col items-start gap-[9px]" />
            <Card name={'Nutrition'} imageSrc={'images/img_rectangle_3.png'} className="flex w-full flex-col items-center gap-1" />
            <Card name={'Steam Room'} imageSrc={'images/img_rectangle_4_223x337.png'} className="flex w-full flex-col items-start gap-[5px]" />
            <Card name={'Suppliments'} imageSrc={'images/img_rectangle_5.png'} className="flex w-full flex-col items-center gap-2" />
            <Card name={'Gym Trainers'} imageSrc={'images/img_rectangle_4_2.png'} className="flex w-full flex-col items-center gap-2" />
          </div>
        </div>
        <div className="mx-auto mt-[117px] flex w-full max-w-[1216px] flex-col items-center gap-[37px] md:p-5">
          <Heading size="lg" as="h2" className="text-center !font-inriaserif !font-bold capitalize">
            Packages We Offer
          </Heading>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(532px_,_1fr))] justify-center gap-[152px] self-stretch">
            <PriceComponent className="relative h-[346px] w-full md:h-auto" />
            <PriceComponent className="relative h-[346px] w-full md:h-auto" />
            <div className="relative h-[346px] w-full md:h-auto">
              <div className="flex flex-col items-center">
                <Heading size="lg" as="h2" className="self-end uppercase !text-gray-900">
                  Monthly Plan
                </Heading>
                <Heading as="h3" className="mt-[18px] uppercase !text-lime-800">
                  ₹ 699/month
                </Heading>
                <Heading as="h4" className="mt-[5px] capitalize !text-black-900">
                  <span className="font-medium text-black-900">training charges excluded</span>
                  <span className="text-black-900">&nbsp;</span>
                </Heading>
                <Text size="s" as="p" className="mt-[31px] capitalize">
                  viewe details
                </Text>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max flex-col items-center justify-center border-2 border-solid border-black-900 bg-white-A700 p-[26px] sm:p-5">
                <Heading size="lg" as="h5" className="mt-[15px] uppercase !text-gray-900">
                  Half year Plan
                </Heading>
                <Heading as="h6" className="mr-[21px] mt-[17px] self-end uppercase !text-lime-800 md:mr-0">
                  ₹ 3599 for 6 months
                </Heading>
                <Heading as="h1" className="mt-[7px] capitalize !text-black-900">
                  <span className="font-medium text-black-900">training charges excluded</span>
                  <span className="text-black-900">&nbsp;</span>
                </Heading>
                <Button shape="square" className="mb-[15px] mt-[17px] min-w-[277px] font-medium capitalize sm:px-5">
                  viewe details
                </Button>
              </div>
            </div>
            <div className="relative h-[346px] w-full md:h-auto">
              <div className="flex flex-col items-center">
                <Heading size="lg" as="h1" className="self-end uppercase !text-gray-900">
                  Monthly Plan
                </Heading>
                <Heading as="h1" className="mt-[18px] uppercase !text-lime-800">
                  ₹ 699/month
                </Heading>
                <Heading as="h1" className="mt-[5px] capitalize !text-black-900">
                  <span className="font-medium text-black-900">training charges excluded</span>
                  <span className="text-black-900">&nbsp;</span>
                </Heading>
                <Text size="s" as="p" className="mt-[31px] capitalize">
                  viewe details
                </Text>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max flex-col items-end justify-center border-2 border-solid border-black-900 bg-white-A700 p-[26px] sm:p-5">
                <Heading size="lg" as="h1" className="mr-12 mt-[15px] uppercase !text-gray-900 md:mr-0">
                  1 Year Plan
                </Heading>
                <Heading as="h1" className="mr-3 mt-[9px] uppercase !text-lime-800 md:mr-0">
                  ₹ 5999 for 12 months
                </Heading>
                <Heading as="h1" className="mr-5 mt-3.5 capitalize !text-black-900 md:mr-0">
                  <span className="font-medium text-black-900">training charges excluded</span>
                  <span className="text-black-900">&nbsp;</span>
                </Heading>
                <Button
                  shape="square"
                  className="mb-[15px] mt-[17px] min-w-[277px] self-center font-medium capitalize sm:px-5"
                >
                  viewe details
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[88px] flex flex-col items-center gap-[39px] self-stretch">
        <Heading
          as="h2"
          className="flex h-[47px] items-center justify-center bg-blue_gray-900 px-[35px] py-px text-center sm:px-5"
        >
          GET IN TOUCH WITH US
        </Heading>
        {/* Form for getting user input */}
        <form ref={form} onSubmit={sendEmail} className="flex w-[42%] flex-col gap-9 md:w-full md:p-5">
          <Input shape="square" type="text" name="user_name" placeholder={`Enter Name`} className="sm:pr-5" />
          <Input shape="square" type="email" name="user_email" placeholder={`Enter Email`} className="sm:pr-5" />
          <Input
            color="blue_gray_100_01"
            shape="square"
            type="number"
            name="phoneNumber"
            placeholder={`Enter Phone Number`}
            className="sm:pr-5"
          />
          <TextArea
            shape="square"
            name="message"
            placeholder={`Message`}
            className="font-thin text-black-900 sm:pb-5 sm:pr-5"
          />
          <Button type="submit" color="amber_600" size="xs" shape="round" className="w-full font-black sm:px-5">
            Submit
          </Button>
        </form>
      </div>
      <div className="mt-[42px] flex flex-col items-center self-stretch">
          <div className="flex justify-center self-stretch bg-gray-900_01">
            <Heading as="h2" className="text-center">
              About Us
            </Heading>
          </div>
          <div className="relative mt-[9px] h-[74px] w-[31%]">
            <Heading size="xs" as="h2" className="relative bottom-[0.00px] right-[0.00px] m-auto w-[95%] text-center">
              <>
                A-143, 1st Floor, Handewadi Road,Hadapsar, Pune, Maharshtra - 411028
              </>
            </Heading>
            <Img
              src="images/img_ellipse_1.png"
              alt="image"
              className="absolute left-[0.00px] top-[0.00px] m-auto h-[45px] rounded-[20px] object-cover"
            />
          </div>
          <div className="mt-[25px] flex w-[42%] justify-between gap-5 md:w-full md:p-5">
            <Img
              src="images/img_rectangle_13.png"
              alt="image_one"
              className="h-[59px] w-[8%] rounded-[26px] object-cover"
            />
            <Img
              src="images/img_rectangle_14.png"
              alt="image_two"
              className="h-[59px] w-[8%] self-start rounded-[26px] object-cover"
            />
            <Img
              src="images/img_rectangle_15.png"
              alt="image_three"
              className="h-[59px] w-[8%] self-start rounded-[26px] object-cover"
            />
            <Img
              src="images/img_rectangle_16.png"
              alt="image_four"
              className="h-[59px] w-[8%] rounded-[26px] object-cover"
            />
          </div>
        </div>
      </div>
      {loading ? <Loader /> : null}
      <ToastContainer />
    </>
  );
}
