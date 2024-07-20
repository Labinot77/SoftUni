function School(params) {
    let Pencils = Number(params[0]) 
    let Markers = Number(params[1]) 
    let CleaningSuppliesInLiters = Number(params[2]) 
    let DiscountInProcent = Number(params[3]) 

    let NeededPencils = Pencils * 5.8
    let NeededMarkers = Markers * 7.2
    let NeededCleaningSuppliesInLiters = CleaningSuppliesInLiters * 1.2

    let totalAmount = NeededPencils + NeededMarkers + NeededCleaningSuppliesInLiters

    let totalAmountWithDiscount = totalAmount - (totalAmount * (DiscountInProcent / 100))

    console.log(totalAmountWithDiscount)
}

