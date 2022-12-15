<template>
<div class="welcome">
  <h2>Selamat datang, ADMIN</h2>
</div>
<div class="header">
  <br><br>
  <h1>Sistem Informasi Ternak Kambing dan Sapi</h1>
</div>
<div class="dasboard">
		<img alt="dashboard icon" src="../assets/white/dashboard-icon.svg"><a href="home">Dashboard</a><hr />
		<img alt="cow icon" src="../assets/white/cow-icon-white.svg"><a href="daftar-ternak">Daftar Hewan</a><hr />
		<img alt="trophy icon" src="../assets/white/trophy-svgrepo-com.svg"><a href="prestasi">Daftar Prestasi</a><hr />
		<img alt="calendar icon" src="../assets/white/calendar-icon.svg"><a href="tanggal">Tanggal Penting</a><hr />
		<img alt="medicine icon" src="../assets/white/medicine-icon.svg"><a href="pengobatan">Riwayat Pengobatan</a><hr />
		<img alt="history icon" src="../assets/white/history-icon.svg"><a href="transaksi">Riwayat Transaksi</a><hr />
		<img alt="setting icon" src="../assets/white/settings-gear-svgrepo-com.svg"><a href="setting">Pengaturan</a><hr />
</div>
<div class="menu">
  <img alt="money icon" src="../assets/black/money-icon.svg">
  <span>Riwayat Transaksi Ternak</span>
</div>
<table class="table">
  <thead>
    <tr>
		<th>ID Hewan</th>
		<th>Transaksi</th>
		<th>Total</th>
		<th>Status</th>
		<th>Tanggal</th> 
    </tr>
  </thead>
  <tbody v-for="transaksihewan in transaksihewan" :key="transaksihewan.id">
		<tr>
			<td data-label="ID Hewan">{{transaksihewan.id}}</td>
			<td data-label="Transaksi">{{transaksihewan.transaksi}}</td>
			<td data-label="Total">{{transaksihewan.total}}</td>
			<td data-label="Status">{{transaksihewan.status}}</td>
			<td data-label="Tanggal">{{transaksihewan.tanggal}}</td>
		</tr>
	</tbody>
	<button class="button" ><a href="transaksi-baru">Tambah Riwayat Transaksi</a></button>
</table>
</template>


<script>
import { collection, getDocs } from "firebase/firestore/lite";
import db from "../firebase";


export default {
  data() {
    return {
      transaksihewan: [],
    };
  },
  mounted() {
    this.gettransaksihewan();
  },
  methods: {
    gettransaksihewan() {
      getDocs(collection(db, "transaksihewan")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.transaksihewan.push({ id: doc.id, ...doc.data() });
        });
      });
      console.log(this.todos);
    },
  }
}
</script>

<style>
body{
	font-family: sans-serif;
}

.header{
	background-color: rgb(50, 50, 214);
}

.dasboard{
		position: absolute;
		left: 0px;
		width: 250px;
		height: 600px;
		border: 50px solid rgb(50, 50, 214);
		background-color: rgb(50, 50, 214);
}

a{
	color: rgba(32,78,147,255);
	font-size:large;
}

h1{
	color: rgb(255, 255, 255);
	text-align: center;
}

h2{
	text-align: center;
}

*{
	box-sizing: border-box;
}

.table{
	width: 72%;
	border-collapse: collapse;
	float: right;
}

.table td,.table th{
  padding:12px 15px;
  border:1px solid #ddd;
  text-align: center;
  font-size:16px;
}

.table th{
	background-color: rgb(50, 50, 214);
	color:#ffffff;
}

.table tbody tr:nth-child(even){
	background-color: #f5f5f5;
}

/*responsive*/

@media(max-width: 500px){
	.table thead{
		display: none;
	}

	.table, .table tbody, .table tr, .table td{
		display: block;
		width: 100%;
	}
	.table tr{
		margin-bottom:15px;
	}
	.table td{
		text-align: right;
		padding-left: 50%;
		text-align: right;
		position: relative;
	}
	.table td::before{
		content: attr(data-label);
		position: absolute;
		left:0;
		width: 50%;
		padding-left:15px;
		font-size:15px;
		font-weight: bold;
		text-align: left;
	}
}

body{
	margin: 0px;
	font-family: sans-serif;
}

.welcome{
	height: 100%;
	padding: 1px;
	background-color: rgba(32,78,147,255);
}

.welcome h2{
	margin-left: 20px;
	font-family: 'comic sans ms';
	color: white;
	text-align: start;
}

.header{
	height: 150px;
	text-align: center;
    vertical-align: middle;
	position: relative;
	-webkit-text-stroke: 2px black;
	background-image: url("../assets/header.jpg");
}

.header h1{
	margin: 0;
	color: white;
	font-family: 'comic sans ms';
	font-size: 50px;
	font-weight: bold;
}

.menu {
	border-bottom: 5px solid black;
	margin-left: 370px;
	display: flex;
  align-items:center;
}

.menu img{
	margin-left: 20px;
	margin-top: 5px;
	margin-bottom: 5px;
}

.menu span{
	margin-left: 10px;
	font-family: 'comic sans ms';
	font-size: 30px;
  align-items:center;
	line-height: 0px;
}

.dasboard{
	position: absolute;
	left: 0px;
	width: 370px;
	height: 600px;
	border: 5px solid black;
	background-color: rgba(32,78,147,255);
	display: inline;
}

.dasboard img{
	float: left;
	margin-right: 10px;
	margin-left: 10px;
	margin-top: 10px;
	fill:rgb(255, 255, 255);
}

.dasboard a{
	font-family: 'comic sans ms';
	color: rgb(255, 255, 255);
	font-size:x-large;
	display: flex;
  align-items:center;
	line-height: 50px;
	text-decoration: none;
	margin-top: 10px;
}

h2{
	text-align: center;
}

*{
	box-sizing: border-box;
}

.table{
	margin-top: 20px;
	width: 73%;
	border-collapse: collapse;
	float: right;
	margin-right: 20px;
}

.table td,.table th{
  padding:12px 15px;
  border:1px solid #ddd;
  text-align: center;
  font-size:16px;
}

.table th{
	background-color: rgba(32,78,147,255);
	color:#ffffff;
}

.table tbody tr:nth-child(even){
	background-color: #f5f5f5;
}

/*responsive*/

@media(max-width: 500px){

	.table thead{
		display: none;
		width: auto;
		width: 1%;
		white-space: nowrap;
	}

	.table, .table tbody, .table tr, .table td{
		display: block;
		width: 1%;
		white-space: nowrap;
	}
	.table tr{
		margin-bottom:15px;
		width: 1%;
		white-space: nowrap;
	}
	.table td{
		text-align: right;
		padding-left: 50%;
		text-align: right;
		position: relative;
		width: auto;
		width: 1%;
		white-space: nowrap;
	}
	.table td::before{
		content: attr(data-label);
		position: absolute;
		left:0;
		width: 10%;
		padding-left:15px;
		font-size:15px;
		font-weight: bold;
		text-align: left;
		width: 1%;
		white-space: nowrap;
	}
}
</style>