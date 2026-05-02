"use client";

import { inter, montserrat } from "@/lib/fonts";
import { inputValues } from "@/constants/index";
import { ChangeEvent, useState, MouseEvent as ReactMouseEvent } from "react";
import BarChart from "@/components/BarChart";
import CompoundInterestForm from "@/components/forms/CompoundInterestForm";
import clsx from "clsx";

const Calculadora = () => {
  const [formData, setFormData] = useState({
    DepósitoInicial: 0,
    TasaDeInterésAnual: 5,
    AñosAInvertir: 5,
    FrecuenciaAnualDeInterés: "anualmente",
    AportacionesAdicionales: 0,
  });

  const [interestType, setInterestType] = useState("simple");

  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { value, name } = event.target;
    setFormData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleInterestTypeChange = (
    event: ReactMouseEvent<HTMLButtonElement>,
  ) => {
    const { value } = event.currentTarget;
    setInterestType(value);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center pt-32">
      <section className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-10 px-6 xl:mx-20 xl:flex-row xl:gap-4">
          <div className="-mt-4 flex h-[560px] flex-col rounded-md border px-4 pt-3 shadow-md">
            <div className="mb-4 flex justify-between gap-2 rounded-md p-2">
              <button
                className={clsx("flex-1 rounded-md p-2 font-semibold", {
                  "bg-orange-500 text-white": interestType === "simple",
                })}
                value={"simple"}
                onClick={handleInterestTypeChange}
              >
                Interes Simple
              </button>
              <button
                className={clsx("flex-1 rounded-md p-2 font-semibold", {
                  "bg-orange-500 text-white": interestType === "compuesto",
                })}
                value={"compuesto"}
                onClick={handleInterestTypeChange}
              >
                Interes Compuesto
              </button>
            </div>

            <form className="mx-4 mr-14 flex h-80 w-full flex-col gap-2 xl:w-[340px]">
              <CompoundInterestForm
                inputValues={inputValues}
                formData={formData}
                handleOnChange={handleOnChange}
              />
            </form>
          </div>

          <div className="mb-32 w-full">
            <BarChart data={formData} interestType={interestType} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculadora;
