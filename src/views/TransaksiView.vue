<template>
<div class="welcome">
  <h2>Selamat datang, ADMIN</h2>
</div>
<div class="header">
  <br><br>
  <h1>Sistem Informasi Ternak Hewan</h1>
</div>
<div class="dasboard">
  <img alt="dashboard icon" src="../assets/white/dashboard-icon.svg"><a href="home">Dashboard</a><hr />
  <img alt="list icon" src="../assets/white/list-icon.svg"><a href="daftar-ternak">Daftar Hewan Ternak</a><hr />
  <img alt="add icon" src="../assets/white/add-icon.svg"><a href="hewan-baru">Hewan Ternak Baru</a><hr />
  <img alt="history icon" src="../assets/white/history-icon.svg"><a href="transaksi">Riwayat Transaksi Ternak</a><hr />
</div>
<div class="menu">
  <img alt="money icon" src="../assets/black/money-icon.svg">
  <span>Riwayat Transaksi Ternak</span>
</div>
<table class="table">
  <thead>
    <tr>
      <th>Tanggal</th>
      <th>ID Hewan</th>
      <th>Transaksi</th>
      <th>Total</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <hr />
      <td data-label="Tanggal">21/10/2022</td>
			<td data-label="ID Hewan">K-020</td>
			<td data-label="Transaksi">Penjualan</td>
			<td data-label="Total">Rp 10.000.000</td>
			<td style="color: yellow;" data-label="Status">Sudah dibayar</td>
    </tr>
    <tr>
      <td data-label="Tanggal">11/10/2022</td>
      <td data-label="ID Hewan">S-019</td>
      <td data-label="Transaksi">Pembelian</td>
      <td data-label="Total">Rp 17.000.000</td>
      <td style="color: rgb(0, 255, 0);" data-label="Status">Selesai</td>
    </tr>
  
    <tr>
      <td data-label="Tanggal">01/10/2022</td>
      <td data-label="ID Hewan">S-018</td>
      <td data-label="Transaksi">Pembelian</td>
      <td data-label="Total">Rp 14.000.000</td>
      <td style="color:red;" data-label="Status">Dibatalkan</td>
      </tr>
  
    <tr>
      <td data-label="Tanggal">25/09/2022</td>
      <td data-label="ID Hewan">S-017</td>
      <td data-label="Transaksi">Penjualan</td>
      <td data-label="Total">Rp 15.000.000</td>
      <td style="color:rgb(0, 255, 0);" data-label="Status">Selesai</td>
    </tr>
  </tbody>
</table>
</template>


<script>
export default {

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
	color: rgb(255, 255, 255);
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