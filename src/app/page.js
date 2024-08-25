import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import { FaArrowDown } from "react-icons/fa";
import { BiUpArrowAlt } from "react-icons/bi";
import { MdExpandMore } from "react-icons/md";
import LineChartComponent from "./LineChartComponent";
import DoughnutChartComponent from "./DoughnutChartComponent";
import LineCharts from "./LineCharts";
import ExponentialLineChart from "./ExponentialLineChart";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.backgroundContainer} style={{height:'100%',overflow:"auto"}}>
        <div className="container mt-2">
          <div className="row">
          <div className="col-md-4">
          <div className={` mt- 2 card ${styles.card}`}>
            <div className={styles.cardContent}>
              <span style={{color:"#8C9169",fontSize:"16px",fontWeight:"400"}}>TVL</span>
              <span  className='position-absolute end-0 ms-1'>
              <span className="me-3" style={{fontSize:"12px"}}>24</span><span className="badge text-bg-danger" style={{fontSize:"12px"}}><FaArrowDown className="me-2" />0.83</span></span>
            </div>
            <br/>
            <p>$3,110,977.73</p>
          </div>
        </div>
            <div className="col-md-4">
            <div className={`card ${styles.card}`}>
            <div className={styles.cardContent}>
              <span style={{color:"#8C9169",fontSize:"16px",fontWeight:"400"}}>Prices</span>
              <span  className='position-absolute end-0 me-1'>
              <span className="me-3" style={{fontSize:"12px"}}>24h</span>
              <span className="badge text-bg-danger" style={{fontSize:"12px"}}><FaArrowDown className="me-2" />0.90</span>
              <span className="badge text-bg-success ms-1" style={{fontSize:'12px'}}> <BiUpArrowAlt /> 83.61%</span>
              </span>
            </div>
            <br/>
            <p>$3,110,977.73</p>
          </div>
            </div>
            <div className="col-md-4">
            <div className={`card ${styles.card}`}>
            <div className={styles.cardContent}>
              <span style={{color:"#8C9169",fontSize:"16px",fontWeight:"400"}}>Marketcap</span>
              <span  className='position-absolute end-0 me-1'>
              <span className="me-3" style={{fontSize:"12px"}}>24h</span><span className="badge text-bg-danger" style={{fontSize:"12px"}}><FaArrowDown className="me-2" />0.83%</span></span>
            </div>
            <br/>
            <p>$3,110,977.73</p>
          </div>
            </div>
          </div>
          <div className="row mt-2">
          <div className="col-6">
          <div className={`card ${styles.card}`}>
          <div className={styles.cardContent} >
            <span style={{color:'#EFFF85',fontSize:'16px'}}>IMSO SUPPLY</span>
            <br/>
            <div className={styles.cardDetails}>
              <div className={styles.detail}>
                <span>Max Supply</span>
                <span>Total Supply</span>
                <span>Circulating Supply</span>
              </div>
              <div className={styles.detail}>
                <span>200,000,000.00</span>
                <span>200,000,000.00</span>
                <span>11,000,000.00</span>
              </div>
            </div>
            <hr style={{color:"#F5FFB5"}}/>
            <span style={{color:'#F5FFB5',fontSize:'14px'}}>Contracts</span>
            <span className={styles.detail}><MdExpandMore /></span>
          </div>
        </div>
        <div className={`mt-2 card ${styles.card}`}>
        <div className={styles.cardContent} >
          <span className='d-flex mt-2' style={{color:'#EFFF85',fontSize:'16px',textAlign:'center',justifyContent:"center",alignItems:'center'}}>IMSO MARKET</span>
          <br/>
          <span className="d-flex" style={{fontSize:'24px',textAlign:'center',justifyContent:"center",alignItems:'center'}}>$ 4,457,432.40</span>
          <br/>
        <DoughnutChartComponent/>
        </div>
      </div>
          </div>
          
          <div className="col-6">
             <div className={`card ${styles.card}`}>
          <div className={styles.cardContent} >
            <span style={{color:'#EFFF85',fontSize:'16px'}}>IMSO Price</span>
            <br/>
            <span style={{size:'24px'}}>$ 10</span>
          <LineChartComponent/>
            </div>
        </div>
        <div className={`mt-2 card ${styles.card}`}>
        <div className={styles.cardContent} >
          <span style={{color:'#EFFF85',fontSize:'16px'}}>TOTAL VALUE LOCKED IN</span>
          <br/>
          <span style={{size:'24px'}}>$ 10</span>
        <LineChartComponent/>
          </div>
      </div>
          </div>
          </div>
          <div className="row mt-2">
          <div className={`card ${styles.card}`}>
            <div
         >
              <span
                style={{
                  display: 'block',
                  textAlign: 'center',
                  marginBottom: '16px',
                  fontSize: '16px',
                  fontWeight: '400',
                  color:'#EFFF86'
                }}
              >
                LIQUIDITY
              </span>
              <LineCharts />
            </div>
          </div>
        </div>
        
<div className="row mt-2">
<div className={`card ${styles.card}`}>
<div className={styles.cardContent}>
</div>
<span
style={{
  display: 'block',
  textAlign: 'center',
  marginBottom: '16px',
  fontSize: '16px',
  fontWeight: '400',
  color:'#EFFF86'
}}
>
REWARDS
</span>
<span style={{fontSize:'24PX',color:'#CFEF00'}}>65.34<span className='ms-1'style={{fontSize:'20px',color:'#F2FFA1'}}>IMSO</span><span className="ms-4" style={{fontSize:'20px', color:'#3FC629'}}>+0.459 (0.71%)</span></span>
<div className={styles.timeframebuttons}>
<button>24H</button>
<button>IW</button>
<button>IM</button>
<button>IY</button>
</div>
<span style={{fontSize:'13px'}}>Jun 09, 2022, 01:20 PM</span>
<ExponentialLineChart/>
</div>
</div>
        </div>
      </div>
    </main>
  );
}
