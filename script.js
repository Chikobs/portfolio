// PROJECT 11 MODULES: Products, Categories, Cart, Checkout, Order History, Images, Admin
const products=[
{id:1,name:"Wireless Headphone",price:89,cat:"Electronics",img:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",stock:20},
{id:2,name:"Smart Watch",price:149,cat:"Electronics",img:"https://images.unsplash.com/photo-1579586337278-3befd40fd17b?w=400",stock:15},
{id:3,name:"Running Shoes",price:79,cat:"Fashion",img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",stock:30},
{id:4,name:"Leather Handbag",price:120,cat:"Fashion",img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",stock:12},
{id:5,name:"DSLR Camera",price:599,cat:"Electronics",img:"https://images.unsplash.com/photo-1452780212940-6f5c84d7fa94?w=400",stock:8},
{id:6,name:"Organic Groceries Pack",price:45,cat:"Groceries",img:"https://images.unsplash.com/photo-1542838132-92c53300491e?w=400",stock:50},
{id:7,name:"Classic Wrist Watch",price:199,cat:"Accessories",img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400",stock:18},
{id:8,name:"Smartphone 5G",price:299,cat:"Electronics",img:"https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400",stock:25}
];
let cart=JSON.parse(localStorage.getItem('ec_cart')||'[]');
let orders=JSON.parse(localStorage.getItem('ec_orders')||'[]');
let currentFilter='all',searchQ='';

function renderProducts(list=products){
 const grid=document.getElementById('productGrid'); if(!grid) return;
 grid.innerHTML=list.map(p=>`<div class="col-6 col-md-3"><div class="card product-card" onclick="openProduct(${p.id})"><img src="${p.img}"><div class="card-body"><div class="small text-muted">${p.cat}</div><div class="fw-bold">${p.name}</div><div class="d-flex justify-content-between align-items-center mt-1"><span class="fw-bold text-primary">$${p.price}</span><span class="badge bg-light text-dark border">${p.stock} left</span></div><button class="btn btn-cart" onclick="event.stopPropagation();addToCart(${p.id})"><i class="bi bi-cart-plus"></i> Add to Cart</button></div></div></div>`).join('');
}
function addToCart(id){ const p=products.find(x=>x.id===id); let ex=cart.find(c=>c.id===id); if(ex) ex.qty++; else cart.push({...p,qty:1}); saveCart(); toast(p.name+' added'); }
function saveCart(){ localStorage.setItem('ec_cart',JSON.stringify(cart)); updateCart(); }
function updateCart(){ const c=cart.reduce((s,x)=>s+x.qty,0); document.querySelectorAll('#cartCount,#cartCount2').forEach(el=>{ if(el) el.innerText=c; }); const cont=document.getElementById('cartItems'), emp=document.getElementById('emptyCart'), foot=document.getElementById('cartFooter'); if(!cont) return; if(cart.length===0){ cont.innerHTML=''; if(emp) emp.classList.remove('d-none'); if(foot) foot.classList.add('d-none'); return; } if(emp) emp.classList.add('d-none'); if(foot) foot.classList.remove('d-none'); cont.innerHTML=cart.map(x=>`<div class="d-flex gap-2 border-bottom py-2"><img src="${x.img}" style="width:60px;height:60px;object-fit:contain" class="border rounded"><div class="flex-grow-1"><div class="small fw-bold">${x.name}</div><div class="small">$${x.price} x ${x.qty}</div><div class="mt-1"><button class="btn btn-sm border" onclick="qty(${x.id},-1)">-</button><span class="px-2 small">${x.qty}</span><button class="btn btn-sm border" onclick="qty(${x.id},1)">+</button><button class="btn btn-sm text-danger ms-2" onclick="removeCart(${x.id})"><i class="bi bi-trash"></i></button></div></div></div>`).join(''); document.getElementById('cartTotal').innerText='$'+cart.reduce((s,x)=>s+x.price*x.qty,0); }
function qty(id,d){ let it=cart.find(c=>c.id===id); it.qty+=d; if(it.qty<=0) cart=cart.filter(c=>c.id!==id); saveCart(); }
function removeCart(id){ cart=cart.filter(c=>c.id!==id); saveCart(); }
function filterCat(cat){ currentFilter=cat; applyFilter(); const shop=document.getElementById('shop'); if(shop) shop.scrollIntoView({behavior:'smooth'}); }
function searchProducts(){ searchQ=document.getElementById('searchInput').value.toLowerCase(); applyFilter(); }
function applyFilter(){ let l=products; if(currentFilter!=='all') l=l.filter(p=>p.cat===currentFilter); if(searchQ) l=l.filter(p=>p.name.toLowerCase().includes(searchQ)||p.cat.toLowerCase().includes(searchQ)); renderProducts(l); }
function sortProducts(){ let v=document.getElementById('sortSelect').value; let l=[...products]; if(v==='low') l.sort((a,b)=>a.price-b.price); if(v==='high') l.sort((a,b)=>b.price-a.price); if(currentFilter!=='all') l=l.filter(p=>p.cat===currentFilter); renderProducts(l); }
function openProduct(id){ const p=products.find(x=>x.id===id); document.getElementById('modalName').innerText=p.name; document.getElementById('modalImg').src=p.img; document.getElementById('modalPrice').innerText='$'+p.price; document.getElementById('modalDesc').innerText=p.cat+' - Premium quality product with warranty. Stock: '+p.stock; document.getElementById('modalAddBtn').onclick=()=>{ addToCart(p.id); bootstrap.Modal.getInstance(document.getElementById('productModal')).hide(); }; new bootstrap.Modal(document.getElementById('productModal')).show(); }
function checkout(){ if(cart.length===0) return; const total=cart.reduce((s,x)=>s+x.price*x.qty,0); const order={id:'ORD'+Date.now(), date:new Date().toLocaleString(), items:[...cart], total:total, status:'Paid'}; orders.unshift(order); localStorage.setItem('ec_orders',JSON.stringify(orders)); cart=[]; saveCart(); alert('Order '+order.id+' placed! Total $'+total); window.location.href='orders.html'; }
function toast(m){ document.getElementById('toastMsg').innerText=m; new bootstrap.Toast(document.getElementById('liveToast')).show(); }
document.addEventListener('DOMContentLoaded',()=>{ renderProducts(); updateCart(); const s=document.getElementById('searchInput'); if(s) s.addEventListener('keyup',e=>{ if(e.key==='Enter') searchProducts(); }); });