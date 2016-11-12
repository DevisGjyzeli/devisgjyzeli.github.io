module Jekyll
    module ItalianDates
        MONTHS = {"01" => "Gennaio", "02" => "Febbraio", "03" => "Marzo",
                "04" => "Aprile", "05" => "Maggio", "06" => "Giugno",
                "07" => "Luglio", "08" => "Agosto", "09" => "Settembre",
                "10" => "Ottobre", "11" => "Novembre", "12" => "Dicembre"}

        # http://man7.org/linux/man-pages/man3/strftime.3.html
        def italianDate(date)
            day = time(date).strftime("%e") # leading zero is replaced by a space
            month = time(date).strftime("%m")
            year = time(date).strftime("%Y")
            day+' '+MONTHS[month]+' '+year
        end

        def html5date(date)
            day = time(date).strftime("%d")
            month = time(date).strftime("%m")
            year = time(date).strftime("%Y")
            year+'-'+month+'-'+day
        end
    end
end

Liquid::Template.register_filter(Jekyll::ItalianDates)
