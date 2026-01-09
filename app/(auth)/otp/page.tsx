import PinnedLogos from "@/components/assessement/PinnedLogos";
import OTPForm from "@/components/auth/OTPForm";

export default function OTPPage() {
  return (
    
    <div className="flex text-white">
        {/* LOGOS */}
    <div className="absolute left-0 top-0 bg-white z-20">
        <PinnedLogos />
    </div>
      {/* LEFT */}
      <div
        className="relative hidden w-1/2 lg:flex flex-col justify-center px-16"
        style={{
          backgroundImage: "url('/auth/bg-pattern.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >


        {/* TEXT */}
        <h1 className="mb-6 text-4xl font-bold leading-tight">
          Verify your Identity to <br /> continue
        </h1>

        <p className="max-w-md text-white/80">
          To ensure the highest level of security for your account,
          we need to confirm it’s really you.
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex bottom-0 w-full items-center justify-center h-[580px] rounded-2xl bg-white lg:w-1/2">
        <OTPForm />
      </div>

    </div>
  );
}
