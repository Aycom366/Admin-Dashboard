import { Customer, NewJoinUser, Status } from "../models";

export const data = [
  {
    name: "JAN",
    activeUser: 4000,
    offlineUsers: 2400,
    amt: 2400,
  },
  {
    name: "FEB",
    activeUser: 4000,
    offlineUsers: 2800,
    amt: 2400,
  },
  {
    name: "MAR",
    activeUser: 4500,
    offlineUsers: 3400,
    amt: 2400,
  },
  {
    name: "APRIL",
    activeUser: 900,
    offlineUsers: 2450,
    amt: 2400,
  },
  {
    name: "MAY",
    activeUser: 8000,
    offlineUsers: 200,
    amt: 2400,
  },
  {
    name: "JUNE",
    activeUser: 1200,
    offlineUsers: 1400,
    amt: 2400,
  },
  {
    name: "JULY",
    activeUser: 400,
    offlineUsers: 2400,
    amt: 2400,
  },
  {
    name: "AUG",
    activeUser: 200,
    offlineUsers: 3500,
    amt: 2400,
  },
  {
    name: "SEPT",
    activeUser: 8600,
    offlineUsers: 7000,
    amt: 2400,
  },
  {
    name: "OCT",
    activeUser: 1520,
    offlineUsers: 9000,
    amt: 2400,
  },
  {
    name: "NOV",
    activeUser: 7000,
    offlineUsers: 900,
    amt: 2400,
  },
  {
    name: "DEC",
    activeUser: 1000,
    offlineUsers: 2000,
    amt: 2400,
  },
];

export const customerTransaction: Array<Customer> = [
  {
    id: "0",
    name: "Ayomide Bam",
    amount: 2500,
    status: Status.Approved,
    img: "",
    date: new Date(),
  },
  {
    id: "1",
    name: "temitayo Bam",
    amount: 4500,
    status: Status.Pending,
    img: "",
    date: new Date(),
  },
  {
    id: "2",
    name: "Ayomide Bam",
    amount: 2500,
    status: Status.Rejected,
    img: "",
    date: new Date(),
  },
  {
    id: "3",
    name: "Ayomide Bam",
    amount: 2500,
    status: Status.Approved,
    img: "",
    date: new Date(),
  },
  {
    id: "4",
    name: "Ayomide Bam",
    amount: 2500,
    status: Status.Approved,
    img: "",
    date: new Date(),
  },
];

export const newJoin: Array<NewJoinUser> = [
  {
    id: "0",
    name: "Ayomide Bam",
    job: "Web Developer",
    img: "",
  },
  {
    id: "1",
    name: "Sogo Bam",
    job: "Furniture",
    img: "",
  },
  {
    id: "2",
    name: "Esther Ife",
    job: "Caterer",
    img: "",
  },
  {
    id: "3",
    name: "Tosin Bam",
    job: "Lecturer",
    img: "",
  },
  {
    id: "4",
    name: "Gbenga Bam",
    job: "Music",
    img: "",
  },
];
