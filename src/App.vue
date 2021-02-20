<template>
  <router-view />
</template>
<style>
@import "~@coreui/icons/css/all.css";

.c-sidebar {
  background-color: #008272 !important;
}

.c-sidebar .c-sidebar-brand,
.c-sidebar .c-sidebar-header {
  background: none !important;
  padding-bottom:30px;
}
.c-sidebar .c-sidebar-nav, .c-sidebar .c-sidebar-nav-link.c-active {
background: none!important;
}

.c-sidebar .c-sidebar-nav-link.c-active:hover {
background: rgba(0,0,0,0.1)!important;
}

.c-sidebar .c-active.c-sidebar-nav-dropdown-toggle:hover, .c-sidebar .c-sidebar-nav-link.c-active:hover ,.c-sidebar-nav-link .c-sidebar-nav-dropdown-toggle .c-active:hover{
background: rgba(0,0,0,0.1)!important;
}
.card,.card-header{
  border-radius:10px!important;
}
.card{
  box-shadow: 0px 2px 2px -1px rgba(0,0,0,0.6);
}
.card-header {
 border:0px!important;
 padding-top:30px!important;
 padding-bottom:0px!important;
}

pre .normal {
  font-family: 'Arial'!important;
}
.click{
  cursor: cell;
}

.header-top{
  background: #EBEDEF;
  padding:7px!important;
}

.location{
  font-weight: 700;
  font-size: 12px;
}

.clock{
  margin-left: 15px;
  margin-right: 20px;
}

.timeplace{
  text-align: right;
}
.title{
  margin-left:20px;
}

.select-box{
  padding-left: 50px;
}
.select-container {
  padding:1px!important;
  margin:2px;
}

.title-header{
  padding:30px;
}

</style>
