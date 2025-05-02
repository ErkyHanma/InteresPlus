"use client";

import { flow_Circular, karla, montserrat } from "@/lib/fonts";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import useWeb3Forms from "@web3forms/react";

const Contact = () => {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      nombre: "",
      correo: "",
      descripcion: "",
    },
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const { submit: onSubmit } = useWeb3Forms({
    access_key: process.env.NEXT_PUBLIC_KEY || "",
    settings: {
      from_name: "Interes-plus",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      form.reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <section className="flex px-8 items-center md:justify-center h-screen gap-16">
      <div className="flex flex-col w-full max-w-[600px]">
        <p className="font-bold text-4xl xl:text-5xl">Message Us</p>
        <div className={`${flow_Circular.className} pl-1 text-[#ec600a]`}>
          .....................
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-2 pr-2 lg:pr-8"
          >
            <FormField
              control={form.control}
              name="nombre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="John joe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="correo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input placeholder="Johndoe@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="descripcion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>¿Tienes algo que decirnos?</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Great Job!" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="self-start text-md  text-white font-bold px-7 py-5 rounded-lg  bg-[#ec600a]"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <Image
          width="400"
          height="400"
          className="w-[400px] h-auto"
          src={"/icon/undraw_profile_details_re_ch9r.svg"}
          alt="Profile Details Ilustration"
        />
      </div>
    </section>
  );
};

export default Contact;

{
  /* <section
        className={`w-full h-full flex flex-col items-center py-20 bg-gray-200 ${montserrat.className}`}
      >
        <p className={`text-5xl font-bold mb-16 ${montserrat.className} `}>
          Get In touch!
        </p>
        <ContactInfo />
      </section> */
}
