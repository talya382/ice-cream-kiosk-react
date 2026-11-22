function FlavorList({flavors,showOnlyAvailable,setShowOnlyAvailable,totalScoops, scoopLimit ,setFlavors}){
 const displayedFlavors = showOnlyAvailable
    ? flavors.filter((flavor) => !flavor.isSoldOut)
    : flavors;
    return(
    <>  
     <button onClick={() => setShowOnlyAvailable(!showOnlyAvailable)}>
        show Only Available
      </button>
      {showOnlyAvailable &&  displayedFlavors.length === 0 && (
        <p>No flavors to show!</p>
      )}
        {displayedFlavors.map((flavor) => (
          <div className="flavor-card" key={flavor.name}>
            <h3>{flavor.name}</h3>
            <p>{flavor.isSoldOut && <span>Sold Out</span>}</p>
                     
             <button  disabled={flavor.isSoldOut} 
             onClick={() => {
               if (!flavor.isSoldOut && totalScoops < scoopLimit) {
                  setFlavors((prevFlavors) =>
                    prevFlavors.map((item) =>
                      item.name === flavor.name
                        ? {
                            ...item,
                            scoopsSelected: item.scoopsSelected + 1,
                            availableScoops:item.availableScoops-1,
                            isSoldOut: item.availableScoops - 1 === 0
                          }
                        : item,
                    ),
                  );
                }
              }}
            >
              +
            </button>
            <button
            disabled={flavor.scoopsSelected === 0}
              onClick={() => {
                setFlavors((prevFlavors) =>
                  prevFlavors.map((item) =>
                    item.name === flavor.name && item.scoopsSelected > 0
                      ? {
                          ...item,
                          scoopsSelected: item.scoopsSelected - 1,
                           availableScoops:item.availableScoops+1,
                            isSoldOut: false
                        }
                      : item,
                  ),
                );
              }}
            >
              -
            </button>
            {flavor.scoopsSelected} 
             
         
            </div>
            ))}
            </>
)
}
export default FlavorList;