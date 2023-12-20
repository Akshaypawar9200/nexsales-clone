

const Card = ({ title, count }) => {
 

  return (
    <>
      <div className="h-[144px] w-[286px]  border-[1px] rounded-t-lg shadow-lg  ">
        <div className="flex justify-center items-center h-[144px] w-[280px] ">
          <div>
            <div className="text-tableHeading">
              <p>{title}</p>
            </div>
            <div className="text-xl text-center">
              <h3>{count}</h3>
            </div>
          </div>  
        </div>
        <div className="bg-neutralBlue h-[10px] w-full rounded-b-lg"></div>
      </div>
    </>
  );
};
export default Card;
