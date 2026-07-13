// import { useEffect, useState } from "react";
// import FeesStats from "../../components/fees/FeesStats";
// import FeesProgress from "../../components/fees/FeesProgress";
// import PayFeesCard from "../../components/fees/PayFeesCard";
// import StudentFeesHeader from "../../components/fees/StudentFeesHeader";
// import { getMyFees } from "../../services/feesService";

// const FeesPage = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchFees();
//   }, []);

//   const fetchFees = async () => {
//     try {
//       const res = await getMyFees();
//       setData(res.data);
//     } catch (err) {
//       console.error("❌ Failed to fetch fees");
//     }
//   };

//   if (!data) {
//     return (
//       <p className="text-gray-500 p-6 text-center">
//         Loading fees...
//       </p>
//     );
//   }

//   return (
//     <div className="p-6 space-y-8">
//       {/* STUDENT HEADER */}
//       <StudentFeesHeader  />
//        {/* <StudentFeesHeader student={data.student} /> */}

//       {/* MAIN SECTION */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//         {/* LEFT BIG CONTAINER */}
//         <div className="lg:col-span-8 bg-white rounded-2xl shadow-md border p-8 space-y-10">
//           {/* STATS */}
//           <FeesStats fees={data} />

//           {/* PROGRESS */}
//           <div className="flex justify-center">
//             <FeesProgress fees={data} />
//           </div>
//         </div>

//         {/* RIGHT PAY CARD */}
//         <div className="lg:col-span-4 flex items-center">
//           <PayFeesCard
//             fees={data}
//             onSuccess={fetchFees}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeesPage;



// import { useEffect, useState } from "react";

// import HeroCard from "../../components/fees/student/HeroCard";
// import FeeStats from "../../components/fees/student/FeeStats";
// import FeeProgress from "../../components/fees/student/FeeProgress";
// import PayFeesCard from "../../components/fees/student/PayFeesCard";
// import PaymentHistory from "../../components/fees/student/PaymentHistory";
// import PaymentTimeline from "../../components/fees/student/PaymentTimeline";
// import FeeBreakdown from "../../components/fees/student/FeeBreakdown";
// import EmptyFeeState from "../../components/fees/student/EmptyFeeState";
// import PageLoader from "../../components/common/PageLoader";
// import dummyFeeData from "../../components/fees/student/dummyFeeData";

// import { getMyFees } from "../../services/feesService";

// const FeesPage = () => {
//   const [loading, setLoading] = useState(true);
//   const [paymentLoading, setPaymentLoading] = useState(false);
//   const [feeData, setFeeData] = useState(null);

//   useEffect(() => {
//     fetchFees();
//   }, []);

//   const fetchFees = async () => {
//     try {
//       setLoading(true);

//       const res = await getMyFees();

//       /*
//         If backend has fee data,
//         use backend.

//         Else use dummy while developing.
//       */

//       if (res?.data) {
//         setFeeData(res.data);
//       } else {
//         setFeeData(dummyFeeData);
//       }
//     } catch (err) {
//       console.error(err);

//       setFeeData(dummyFeeData);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePayment = async () => {
//     try {
//       setPaymentLoading(true);

//       /*
//         Existing Razorpay Logic

//         After payment success

//         await fetchFees();

//       */
//     } finally {
//       setPaymentLoading(false);
//     }
//   };

//   const handleReceiptDownload = (payment) => {
//     console.log(payment);

//     /*
//       Download receipt API
//     */
//   };

//   if (loading) {
//     return (
//       <div className="p-8">
//         {/*  replace with FeeSkeleton */}
//         <AppLoader message="Loading Fees..." />
//       </div>
//     );
//   }

//   if (!feeData) {
//     return (
//       <div className="p-8">
//         <EmptyFeeState />
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-8">

//       <HeroCard
//         student={feeData.student}
//         fee={feeData.fee}
//       />

//       <FeeStats fee={feeData.fee} />

//       <div className="grid lg:grid-cols-12 gap-8">

//         <div className="lg:col-span-8">
//           <FeeProgress fee={feeData.fee} />
//         </div>

//         <div className="lg:col-span-4">
//           <PayFeesCard
//             fee={feeData.fee}
//             loading={paymentLoading}
//             onPay={handlePayment}
//           />
//         </div>

//       </div>

//       <div className="grid lg:grid-cols-12 gap-8">

//         <div className="lg:col-span-8">
//           <PaymentHistory
//             history={feeData.history}
//             onReceiptDownload={handleReceiptDownload}
//           />
//         </div>

//         <div className="lg:col-span-4">
//           <PaymentTimeline
//             history={feeData.history}
//             fee={feeData.fee}
//           />
//         </div>

//       </div>

//       <FeeBreakdown
//         breakdown={feeData.breakdown}
//       />

//     </div>
//   );
// };

// export default FeesPage;



import { useEffect, useState } from "react";

import HeroCard from "../../components/fees/student/HeroCard";
import FeeStats from "../../components/fees/student/FeeStats";
import FeeProgress from "../../components/fees/student/FeeProgress";
import PayFeesCard from "../../components/fees/student/PayFeesCard";
import PaymentHistory from "../../components/fees/student/PaymentHistory";
import PaymentTimeline from "../../components/fees/student/PaymentTimeline";
import FeeBreakdown from "../../components/fees/student/FeeBreakdown";
import EmptyFeeState from "../../components/fees/student/EmptyFeeState";

import PageLoader from "../../components/common/PageLoader";

import dummyFeeData from "../../components/fees/student/dummyFeeData";

import { getMyFees } from "../../services/feesService";

const FeesPage = () => {
  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [feeData, setFeeData] = useState(null);

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = async () => {
    try {
      setLoading(true);

      const res = await getMyFees();

      if (res?.data) {
        setFeeData(res.data);
      } else {
        setFeeData(dummyFeeData);
      }
    } catch (err) {
      console.error(err);

      setFeeData(dummyFeeData);
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    try {
      setPaymentLoading(true);

      /*
        Existing Razorpay Logic

        After Success

        await fetchFees();
      */
    } finally {
      setPaymentLoading(false);
    }
  };

  const handleReceiptDownload = (payment) => {
    console.log(payment);

    /*
      Receipt Download Logic
    */
  };

  if (!feeData && !loading) {
    return (
      <div className="p-8">
        <EmptyFeeState />
      </div>
    );
  }

  return (
    <div className="relative space-y-8">

      {/* Loader Overlay */}

      {loading && (
        <PageLoader message="Loading Fees..." />
      )}

      {/* Hero */}

      {feeData && (
        <>
          <HeroCard
            student={feeData.student}
            fee={feeData.fee}
          />

          <FeeStats
            fee={feeData.fee}
          />

          <div className="grid lg:grid-cols-12 gap-8">

            <div className="lg:col-span-8">

              <FeeProgress
                fee={feeData.fee}
              />

            </div>

            <div className="lg:col-span-4">

              <PayFeesCard
                fee={feeData.fee}
                loading={paymentLoading}
                onPay={handlePayment}
              />

            </div>

          </div>

          <div className="grid lg:grid-cols-12 gap-8">

            <div className="lg:col-span-8">

              <PaymentHistory
                history={feeData.history}
                onReceiptDownload={handleReceiptDownload}
              />

            </div>

            <div className="lg:col-span-4">

              <PaymentTimeline
                history={feeData.history}
                fee={feeData.fee}
              />

            </div>

          </div>

          <FeeBreakdown
            breakdown={feeData.breakdown}
          />
        </>
      )}

    </div>
  );
};

export default FeesPage;