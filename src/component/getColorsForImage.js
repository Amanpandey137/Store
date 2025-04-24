 
export const getColorForImage = (imageName) => {
    const colors = {
      discount: "bg-red-200",
      bogo: "bg-blue-200",
      flash: "bg-yellow-200",
      clearance: "bg-purple-200",
      weekend: "bg-green-200",
      members: "bg-indigo-200",
      new: "bg-pink-200",
      lastchance: "bg-orange-200",
      produce: "bg-emerald-200",
      dairy: "bg-blue-100",
      bulk: "bg-amber-200",
      organic: "bg-green-100",
      snacks: "bg-orange-200",
      bakery: "bg-yellow-100",
      meat: "bg-red-100",
      frozen: "bg-sky-200",
      vitamins: "bg-teal-200",
      firstaid: "bg-red-100",
      skincare: "bg-pink-200",
      babycare: "bg-indigo-100",
      devices: "bg-slate-200",
      otc: "bg-amber-100", 
      beauty: "bg-fuchsia-200",
      dental: "bg-cyan-100",
      cleaning: "bg-cyan-200",
      personal: "bg-violet-200",
      kitchen: "bg-amber-100",
      pet: "bg-lime-200",
      office: "bg-gray-200",
      paper: "bg-blue-50",
      laundry: "bg-emerald-100",
      storage: "bg-indigo-50"
    };
    
    return colors[imageName] || "bg-gray-300";
  };