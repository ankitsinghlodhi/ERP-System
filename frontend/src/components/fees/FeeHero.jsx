import { Wallet, TrendingUp } from "lucide-react";

const FeeHero = ({ stats }) => {
  const collectionRate =
    stats.totalFee === 0
      ? 0
      : Math.round((stats.collected / stats.totalFee) * 100);

  return (
    <div
      className="
      relative
      overflow-hidden
      rounded-3xl
      bg-gradient-to-r
      from-emerald-600
      via-green-600
      to-teal-600
      text-white
      p-8
      shadow-2xl
      "
    >
      <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col lg:flex-row justify-between gap-10">

        <div>

          <div className="flex items-center gap-3">

            <Wallet size={34} />

            <h1 className="text-4xl font-bold">
              Fee Management
            </h1>

          </div>

          <p className="mt-3 text-green-100 text-lg">
            Monitor collections and manage student fee payments.
          </p>

          <div className="mt-8 flex gap-10">

            <div>

              <p className="text-green-100 text-sm">
                Total Collection
              </p>

              <h2 className="text-5xl font-bold mt-2">
                ₹{stats.collected*1000}
              </h2>

            </div>

            <div>

              <p className="text-green-100 text-sm">
                Collection Rate
              </p>

              <h2 className="text-5xl font-bold mt-2">
                {collectionRate}%
              </h2>

            </div>

          </div>

        </div>

        <div className="flex flex-col justify-end">

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">

            <div className="flex items-center gap-2">

              <TrendingUp size={20} />

              <span className="font-semibold">
                Financial Health
              </span>

            </div>

            <div className="mt-5 w-72 h-3 rounded-full bg-white/20 overflow-hidden">

              <div
                className="bg-white h-full rounded-full"
                style={{
                  width: `${collectionRate}%`,
                }}
              />

            </div>

            <p className="mt-4 text-green-100">
              {collectionRate}% fees collected this semester.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FeeHero;