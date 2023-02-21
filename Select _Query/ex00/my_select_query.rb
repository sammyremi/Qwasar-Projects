class MySelectQuery
    def initialize csv_content
        @mycsv_file = csv_content
    end

    def where column_name, criteria
        split_list = @mycsv_file.split("\n")
        #spliting string to get index
        froll = split_list[0]
        col_split = froll.split(",")
        #getting index to work with
        col_index = col_split.index(column_name)
        #looping through to compare item passed in from where function
        for x in 1..split_list.length - 1
            crita = split_list[x].split(",")

            crita_check = crita[col_index]
            #cheking if criterial name passed equal player name to display
            if crita_check == criteria
                ret_arr = []
                ret_arr.append(split_list[x])
                return ret_arr
            end
            
        end
    end
end

