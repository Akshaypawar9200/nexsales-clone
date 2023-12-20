const Card = ({ title, count, classNameForCard,classNameForTitle,classNameForNumber,classNameForLine }) => {
  return (
    <>
      <div className={`h-[144px] w-[286px] border-[1px] rounded-t-lg shadow-lg ${classNameForCard}`}>
        <div className="flex justify-center items-center h-[144px] w-[280px]">
          <div>
            <div className={`text-tableHeading ${classNameForTitle}`}>
              <p>{title}</p>
            </div>
            <div className={`text-xl text-center ${classNameForNumber}`}>
              <h3>{count.toLocaleString()}</h3>
            </div>
          </div>  
        </div>
        <div className={`bg-neutralBlue h-[10px] w-full rounded-b-lg ${classNameForLine}`}></div>
      </div>
    </>
  );
};
export default Card;
