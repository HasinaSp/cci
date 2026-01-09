import PinnedLogos from "@/components/assessement/PinnedLogos";
import OTPForm from "@/components/auth/OTPForm";

export default function OTPPage() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/auth/bg-otp.png')" }}
    >
      {/* LOGOS PINNÉS */}
      <div className="absolute top-0 left-0 z-20 bg-white">
        <PinnedLogos />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8">
        <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-2 items-center">

          {/* LEFT TEXT */}
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight">
              Verify your Identity to <br /> continue
            </h1>

            <p className="max-w-md text-white/80">
              To ensure the highest level of security for your account,
              we need to confirm it’s really you.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center lg:justify-end bg-red-500">
            <div className="absolute w-full max-w-md bottom-0 rounded-t-3xl bg-white p-8 text-black shadow-2xl pb-36">
              <OTPForm />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
