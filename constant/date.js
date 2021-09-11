export function scannedOn() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const monthScanned = monthNames[new Date().getMonth()].toString().slice(0, 3);
  const dayScanned = new Date().getDay();
  return `${monthScanned}/${dayScanned}`;
}
