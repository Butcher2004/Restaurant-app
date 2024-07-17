import React from "react";
import _ from "lodash";

function Pagination({ pgnum, onPageChange, currpg, pgsize, Size }) 
{
  const lengthofbar = 4
  const num = Math.ceil(Size/pgsize)
  // console.log("NUm : ",num)

  if(num==0) return (
    <h1 style={{'fontSize':'20px'}} >No Restaurants Found</h1>
  )

  if(num==1) return null
  const pages = _.range(pgnum, Math.min(pgnum + lengthofbar,num)+1);
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul class="flex items-center -space-x-px h-10 text-base">
          <li>
            <button
              onClick={
                currpg == pgnum
                  ? () => onPageChange(currpg - 1, true)
                  : () => onPageChange(currpg - 1, false)
              }
              disabled={currpg == 1}
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </button>
          </li>
          {pages.map((pg) => (
            <li>
              <a
                onClick={() => onPageChange(pg, pgnum + lengthofbar === currpg)}
                className={
                  pg === currpg
                    ? " flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:text-gray-700 dark:bg-blue-800 dark:border-gray-700 dark:text-gray-400  dark:hover:text-white"
                    : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }
              >
                {pg}
              </a>
            </li>
          ))}
          
          <li>
            <button
              disabled = {currpg===num}
              onClick={
                currpg == pgnum + lengthofbar
                  ? () => onPageChange(currpg + 1, true)
                  : () => onPageChange(currpg + 1, false)
              }
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
