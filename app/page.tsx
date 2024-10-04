"use client";

import Image from "next/image";
import BgMobile from "@/public/assets/mobile/image-host.jpg";
import BgTablet from "@/public/assets/tablet/image-host.jpg";
import BgDesktop from "@/public/assets/desktop/image-host.jpg";
import Logo from "@/public/assets/desktop/logo.svg";
import Spotify from "@/public/assets/desktop/spotify.svg";
import ApplePodcast from "@/public/assets/desktop/apple-podcast.svg";
import GooglePodcasts from "@/public/assets/desktop/google-podcasts.svg";
import PocketCasts from "@/public/assets/desktop/pocket-casts.svg";
import Dot from "@/public/assets/desktop/bg-pattern-dots.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField } from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Oops! Please check your email",
  }),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Your access request has been received");
  }

  return (
    <main className="min-h-screen relative bg-navy z-0 overflow-hidden pb-10 xl:pb-20">
      <Image
        src={BgMobile}
        alt="Background"
        className="absolute -z-10 w-full h-full object-cover opacity-10 md:hidden"
      />
      <Image
        src={BgTablet}
        alt="Background"
        className="absolute -z-10 top-0 right-0 h-[765px] hidden md:block xl:hidden"
      />
      <div className="z-50 text-white font-light p-6 xl:px-[21px] md:px-[39px] max-w-sm md:max-w-screen-md xl:max-w-6xl mx-auto md:relative">
        <Image
          src={BgDesktop}
          alt="Background"
          className="absolute -z-10 top-[130px] left-[408px] h-[638px] hidden xl:block"
        />
        <Image
          src={Dot}
          alt="Background"
          className="absolute -z-10 top-[920px] xl:top-[718px] left-[30px] xl:left-[1064px] hidden md:block"
        />
        <div className="mt-[38px] md:mt-[25px] xl:mt-[78px] mb-[57px] flex justify-center md:block">
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="text-center md:text-left md:bg-navy md:max-w-[635px] xl:max-w-[723px] md:mt-[153px] xl:mt-[103px]">
          <div className="text-[26px] md:text-[48px] xl:text-[52px] leading-[38px] md:leading-[56px] xl:leading-[62px] md:pt-[93px] xl:pt-[88px]">
            <div className="text-light-green">PUBLISH YOUR PODCASTS</div>
            <div className="">EVERY WHERE</div>
          </div>
          <div className="text-lavender mt-4 md:mt-[31px] xl:mt-[24px] max-w-[445px]">
            <p className="leading-[25px] md:leading-[28px] text-[15px] md:text-[18px]">
              Upload your audio to Pod with a single click. We’ll then
              distribute your podcast to Spotify, Apple Podcasts, Google
              Podcasts, Pocket Casts and more!
            </p>
          </div>
          <div className="flex flex-col md:flex-col-reverse">
            <div className="mt-[33px] md:mt-[64px]">
              <div className="flex gap-4 md:gap-7 items-center justify-center md:justify-start">
                <Image
                  src={Spotify}
                  alt="Spotify"
                  className="h-[17px] md:h-[29px] w-fit"
                />
                <Image
                  src={ApplePodcast}
                  alt="Apple Podcast"
                  className="h-[17px] md:h-[29px] w-fit mx-2"
                />
                <Image
                  src={GooglePodcasts}
                  alt="Google Podcasts"
                  className="h-[11px] md:h-[18px] w-fit"
                />
                <Image
                  src={PocketCasts}
                  alt="Pocket Casts"
                  className="h-[15px] md:h-[26px] w-fit"
                />
              </div>
            </div>
            <div className="mt-12 md:mt-10 ">
              <Form {...form}>
                {form.formState.errors.email && (
                  <p className="ps-8 -mt-6 text-left font-bold text-[#FB3E3E] text-[12px] leading-none md:hidden absolute">
                    {form.formState.errors.email.message}
                  </p>
                )}
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-4 md:gap-0 md:flex md:bg-gray-dark md:rounded-full md:h-[56px] md:p-[5px] md:w-[427px]"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormControl>
                        <Input
                          className="text-white bg-gray-dark rounded-full h-[46px] border-none px-8 placeholder:text-white/50 font-bold leading-[28px] focus-visible:ring-0"
                          placeholder="Email address"
                          {...field}
                          autoComplete="off"
                        />
                      </FormControl>
                    )}
                  />
                  <Button className="bg-light-green text-navy font-bold text-[14px] leading-[28px] w-full md:w-fit md:px-[27px] rounded-full h-[46px] hover:bg-[#B3FFE2]">
                    Request Access
                  </Button>
                </form>
                {form.formState.errors.email && (
                  <p className="ps-[37px] pt-2 font-bold text-[#FB3E3E] text-[12px] leading-none hidden md:block absolute">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </Form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
