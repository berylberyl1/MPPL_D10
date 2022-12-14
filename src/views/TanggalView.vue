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
  <img alt="calendar icon" src="../assets/black/calendar-icon.svg">
  <span>Tanggal Penting yang Akan Datang</span>
</div>
<div class="date">
  <h2>November 2022</h2>
</div>
<table class="table" cellspacing="21" cellpadding="21">
  <caption></caption>
  <thead>
    <tr>
      <th>Mon</th>
      <th>Tue</th>
      <th>Wed</th>
      <th>Thu</th>
      <th>Fri</th>
      <th>Sat</th>
      <th>Sun</th>
    </tr>
	</thead>
	<tbody>
		<tr>
      <td>31</td>
      <td><b>1</b><br>S-020 Lahir</td>
      <td><b>2</b></td>
      <td><b>3</b><br>A-021 Dijual</td>
      <td><b>4</b></td>
      <td><b>5</b></td>
      <td><b>6</b></td>
		</tr>
    
		<tr>
			<td><b>7</b><br>S-051 Vaksin</td>
      <td><b>8</b></td>
      <td><b>9</b><br>K-066 Dijual</td>
      <td><b>10</b></td>
      <td><b>11</b></td>
      <td><b>12</b></td>
      <td><b>13</b></td>
		</tr>
   
    <tr>
      <td><b>14</b></td>
      <td><b>15</b></td>
      <td><b>16</b></td>
      <td><b>17</b></td>
      <td><b>18</b></td>
      <td><b>19</b><br>A-010 Lomba</td>
      <td><b>20</b></td>
    </tr>

    <tr>
      <td><b>21</b></td>
      <td><b>22</b></td>
      <td><b>23</b></td>
      <td><b>24</b></td>
      <td><b>25</b><br>S-015 Dijual</td>
      <td><b>26</b></td>
      <td><b>27</b><br>S-100 Lomba</td>
    </tr>

    <tr>
      <td><b>28</b></td>
			<td><b>29</b></td>
			<td><b>30</b></td>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			<td>4</td>
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
	margin: 0;
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
    text-align: left;
	width: 75%;
	margin-right: 5px;
	border-collapse: collapse;
    background: white;
    color: black;
	float: right;
    background-color: lightgrey;
}

.table p{
	margin: 0;
	font-size: 13px;
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

.dasboard{
	position: absolute;
	left: 0px;
	width: 370px;
	height: 600px;
	border: 5px solid black;
	background-color: rgba(32,78,147,255);
	display: inline;
}

.date h2{
	margin-left: 250px;
	font-family: 'comic sans ms';
}
</style>