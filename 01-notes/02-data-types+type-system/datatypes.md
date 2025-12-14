data types in js:
            (1) premetive data types
                number
                string
                integer
                boolean
                null
                undefined
                symbol
                bigint = "big integer"

              (2) Refrence data types
                arrays
                object
                function


catagory - (1)Premetive
           => values only copy hoti hai

           (2)Refrence
           => copy karne par dono values connect/sync ho jati hai yani ek value me changes karne par dusri value bhi change ho jati hai.
           => jaha [] {} () dikhe vaha refrence value hoti hai


typeof quirks -
              e.g., typeof 12
                    typeof null
                    typeof harsh

type coercion - 
            => concept jisme apka ek type automatically dusre type me convert ho jata hai   
            e.g., "5" + 1 = 51 **(concatenation)**
              but "5" - 1 = 4                 

truthy and falsy value -
                    => truthy - 0 false null NaN undefined false "" document.all
                    => falsy - 
  check truthy or falsy = !!0
                          !!null
                          !!NaN