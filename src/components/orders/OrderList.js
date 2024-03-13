const all_order = [
  {
    s_no: 1,
    p_id: 1,
    c_id: 12,
    o_id: "ENTNT561234",
    username: "Ishank",
    amount: 250,
    status: "Delivered",
    date: "12/12/2023",
    delivery_date: "18/12/2023",
    o_date: 12
  },
  {
    s_no: 2,
    p_id: 2,
    c_id: 8,
    o_id: "ENTNT789012",
    username: "Rachit",
    amount: 150,
    status: "Delivered",
    date: "15/12/2023",
    delivery_date: "24/12/2023",
    o_date: 15
  },
  {
    s_no: 3,
    p_id: 3,
    c_id: 20,
    o_id: "ENTNT345678",
    username: "Priya",
    amount: 300,
    status: "Delivered",
    date: "10/12/2023",
    delivery_date: "16/12/2023",
    o_date: 10
  },
  {
    s_no: 4,
    p_id: 4,
    c_id: 15,
    o_id: "ENTNT901234",
    username: "Amit",
    amount: 200,
    status: "Pending",
    date: "18/12/2023",
    delivery_date: "",
    o_date: 18
  },
  {
    s_no: 5,
    p_id: 5,
    c_id: 3,
    o_id: "ENTNT567890",
    username: "Sunita",
    amount: 350,
    status: "Delivered",
    date: "20/12/2023",
    delivery_date: "25/12/2023",
    o_date: 20
  },
  {
    s_no: 6,
    p_id: 6,
    c_id: 18,
    o_id: "ENTNT123456",
    username: "Vikram",
    amount: 280,
    status: "Delivered",
    date: "22/12/2023",
    delivery_date: "27/12/2023",
    o_date: 22
  },
  {
    s_no: 7,
    p_id: 7,
    c_id: 5,
    o_id: "ENTNT789012",
    username: "Deepika",
    amount: 400,
    status: "Pending",
    date: "25/12/2023",
    delivery_date: "",
    o_date: 25
  },
  {
    s_no: 8,
    p_id: 8,
    c_id: 22,
    o_id: "ENTNT345678",
    username: "Ravi",
    amount: 180,
    status: "Delivered",
    date: "28/12/2023",
    delivery_date: "02/01/2024",
    o_date: 28
  },
  {
    s_no: 9,
    p_id: 9,
    c_id: 9,
    o_id: "ENTNT901234",
    username: "Sneha",
    amount: 320,
    status: "Pending",
    date: "30/12/2023",
    delivery_date: "",
    o_date: 30
  },
  {
    s_no: 10,
    p_id: 10,
    c_id: 17,
    o_id: "ENTNT567890",
    username: "Arun",
    amount: 270,
    status: "Delivered",
    date: "03/01/2024",
    delivery_date: "08/01/2024",
    o_date: 3
  },
  {
    s_no: 11,
    p_id: 11,
    c_id: 14,
    o_id: "ENTNT123456",
    username: "Neha",
    amount: 270,
    status: "Pending",
    date: "05/01/2024",
    delivery_date: "",
    o_date: 5
  },
  {
    s_no: 12,
    p_id: 12,
    c_id: 25,
    o_id: "ENTNT789012",
    username: "Rahul",
    amount: 210,
    status: "Delivered",
    date: "08/01/2024",
    delivery_date: "12/01/2024",
    o_date: 8
  },
  {
    s_no: 13,
    p_id: 13,
    c_id: 7,
    o_id: "ENTNT234567",
    username: "Pooja",
    amount: 180,
    status: "Pending",
    date: "10/01/2024",
    delivery_date: "",
    o_date: 10
  },
  {
    s_no: 14,
    p_id: 14,
    c_id: 19,
    o_id: "ENTNT890123",
    username: "Suresh",
    amount: 290,
    status: "Delivered",
    date: "12/01/2024",
    delivery_date: "16/01/2024",
    o_date: 12
  },
  {
    s_no: 15,
    p_id: 15,
    c_id: 11,
    o_id: "ENTNT456789",
    username: "Kavita",
    amount: 330,
    status: "Delivered",
    date: "15/01/2024",
    delivery_date: "20/01/2024",
    o_date: 15
  },
  {
    s_no: 16,
    p_id: 16,
    c_id: 6,
    o_id: "ENTNT901234",
    username: "Sanjay",
    amount: 240,
    status: "Pending",
    date: "18/01/2024",
    delivery_date: "",
    o_date: 18
  },
  {
    s_no: 17,
    p_id: 17,
    c_id: 23,
    o_id: "ENTNT567890",
    username: "Manisha",
    amount: 380,
    status: "Delivered",
    date: "20/01/2024",
    delivery_date: "25/01/2024",
    o_date: 20
  },
  {
    s_no: 18,
    p_id: 18,
    c_id: 16,
    o_id: "ENTNT234567",
    username: "Ramesh",
    amount: 200,
    status: "Delivered",
    date: "22/01/2024",
    delivery_date: "27/01/2024",
    o_date: 22
  },
  {
    s_no: 19,
    p_id: 19,
    c_id: 28,
    o_id: "ENTNT890123",
    username: "Meena",
    amount: 280,
    status: "Pending",
    date: "25/01/2024",
    delivery_date: "",
    o_date: 25
  },
  {
    s_no: 20,
    p_id: 20,
    c_id: 13,
    o_id: "ENTNT456789",
    username: "Vinod",
    amount: 310,
    status: "Delivered",
    date: "28/01/2024",
    delivery_date: "02/02/2024",
    o_date: 28
  },
  {
    s_no: 20,
    p_id: 20,
    c_id: 13,
    o_id: "ENTNT456789",
    username: "Vinod",
    amount: 310,
    status: "Delivered",
    date: "28/01/2024",
    delivery_date: "02/02/2024",
    o_date: 28
  },
  {
    s_no: 21,
    p_id: 21,
    c_id: 10,
    o_id: "ENTNT901234",
    username: "Anita",
    amount: 190,
    status: "Pending",
    date: "30/01/2024",
    delivery_date: "",
    o_date: 30
  },
  {
    s_no: 22,
    p_id: 22,
    c_id: 24,
    o_id: "ENTNT567890",
    username: "Vivek",
    amount: 350,
    status: "Delivered",
    date: "02/02/2024",
    delivery_date: "07/02/2024",
    o_date: 2
  },
  {
    s_no: 23,
    p_id: 23,
    c_id: 21,
    o_id: "ENTNT234567",
    username: "Suman",
    amount: 220,
    status: "Pending",
    date: "05/02/2024",
    delivery_date: "",
    o_date: 5
  },
  {
    s_no: 24,
    p_id: 24,
    c_id: 2,
    o_id: "ENTNT890123",
    username: "Harish",
    amount: 260,
    status: "Delivered",
    date: "08/02/2024",
    delivery_date: "12/02/2024",
    o_date: 8
  },
  {
    s_no: 25,
    p_id: 25,
    c_id: 27,
    o_id: "ENTNT456789",
    username: "Madhu",
    amount: 300,
    status: "Pending",
    date: "10/02/2024",
    delivery_date: "",
    o_date: 10
  },
  {
    s_no: 26,
    p_id: 26,
    c_id: 4,
    o_id: "ENTNT901234",
    username: "Ritu",
    amount: 330,
    status: "Delivered",
    date: "12/02/2024",
    delivery_date: "17/02/2024",
    o_date: 12
  },
  {
    s_no: 27,
    p_id: 27,
    c_id: 26,
    o_id: "ENTNT567890",
    username: "Raj",
    amount: 210,
    status: "Pending",
    date: "15/02/2024",
    delivery_date: "",
    o_date: 15
  },
  {
    s_no: 28,
    p_id: 28,
    c_id: 12,
    o_id: "ENTNT234567",
    username: "Aarti",
    amount: 280,
    status: "Delivered",
    date: "18/02/2024",
    delivery_date: "23/02/2024",
    o_date: 18
  },
  {
    s_no: 29,
    p_id: 29,
    c_id: 18,
    o_id: "ENTNT890123",
    username: "Vikas",
    amount: 240,
    status: "Pending",
    date: "20/02/2024",
    delivery_date: "",
    o_date: 20
  },
  {
    s_no: 30,
    p_id: 30,
    c_id: 5,
    o_id: "ENTNT456789",
    username: "Deepa",
    amount: 370,
    status: "Delivered",
    date: "22/02/2024",
    delivery_date: "27/02/2024",
    o_date: 22
  },
  {
    s_no: 31,
    p_id: 31,
    c_id: 28,
    o_id: "ENTNT901234",
    username: "Kiran",
    amount: 310,
    status: "Pending",
    date: "25/02/2024",
    delivery_date: "",
    o_date: 25
  },
  
  

];

export default all_order;