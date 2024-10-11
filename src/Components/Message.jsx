import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Carousel, Button } from "@material-tailwind/react";


const MessageComponent = () => {
  return (
    <>
      <Carousel className="w-screen h-[45rem]" autoplay={true} loop={true}>
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <div className="flex justify-center gap-2 mb-4">
              <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />
              </div>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold"
              >
                Chief Technical Officer, <span className=" font-extralight"> Suhas Lingam Liger Tiger </span>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <div className="flex justify-center gap-2 mb-4">
              <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />
              </div>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Co-Founder & CEO , Dattatrya
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
            </div>
          </div>
        </div>

        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <div className="flex justify-center gap-2 mb-4">
              <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />
              </div>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Co-Founder , Aryan Naidu
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
            </div>
          </div>
        </div>
      </Carousel>
      
    </>
  );
};

export default MessageComponent;
