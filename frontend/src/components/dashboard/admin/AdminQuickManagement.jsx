

import { useNavigate } from "react-router-dom";
import SectionCard from "../common/SectionCard";
import { dashboardConfig } from "../../../config/dashboardConfig";

const actions = dashboardConfig.ADMIN.quickActions;


const AdminQuickManagement = () => {
  const navigate = useNavigate();

  return (
    <SectionCard
      title="Quick Management"
      subtitle="Frequently used modules"
    >
      <div className="grid grid-cols-2 gap-4">

        {actions.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              onClick={() => navigate(item.path)}
              className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              hover:border-blue-400
              hover:shadow-lg
              transition-all
              p-4
              "
            >

              <div
                className={`
                w-12
                h-12
                rounded-xl
                ${item.color}
                flex
                items-center
                justify-center
                text-white
                `}
              >

                <Icon size={22}/>

              </div>

              <span className="font-semibold">

                {item.title}

              </span>

            </button>

          );

        })}

      </div>
    </SectionCard>
  );
};

export default AdminQuickManagement;