import SensenColoring from "./coloring";
export default class SensenColor {
    constructor() {
        this.nature = '@palette';
        this.name = '';
        this.scheme = {};
        this.mixed = {};
    }
    Mixture() {
        if (this.scheme) {
            Object.entries(this.scheme).map(i => {
                const rgb = SensenColoring.HexToRGB(i[1]);
                const mixed = {
                    color: i[1],
                    rgb: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`,
                    rgbSmaller: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .1)`,
                    rgbSmall: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .20)`,
                    rgbMedium: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .50)`,
                    rgbBig: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .80)`,
                    rgbBigger: `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, .96)`,
                };
                this.mixed[i[0]] = mixed;
            });
        }
        return this;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLGNBQWMsTUFBTSxZQUFZLENBQUM7QUFPeEMsTUFBTSxDQUFDLE9BQU8sT0FBTyxXQUFXO0lBQWhDO1FBRUksV0FBTSxHQUFzQixVQUFVLENBQUM7UUFFdkMsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUVsQixXQUFNLEdBQTBCLEVBQTJCLENBQUM7UUFFNUQsVUFBSyxHQUEwQixFQUFFLENBQUM7SUFzQ3RDLENBQUM7SUFwQ0csT0FBTztRQUVILElBQUcsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUVYLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsRUFBRTtnQkFFL0IsTUFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFMUMsTUFBTSxLQUFLLEdBQXlCO29CQUVoQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFWCxHQUFHLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRztvQkFFekMsVUFBVSxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU87b0JBRXJELFFBQVEsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRO29CQUVwRCxTQUFTLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUTtvQkFFckQsTUFBTSxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVE7b0JBRWxELFNBQVMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRO2lCQUV4RCxDQUFBO2dCQUVELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFBO1lBRTVCLENBQUMsQ0FBQyxDQUFDO1NBRU47UUFFRCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZW5zZW5Db2xvck5hdHVyZSwgU2Vuc2VuQ29sb3JTY2hlbWVCYXNlIH0gZnJvbSBcIi4vY29sb3IudFwiO1xuaW1wb3J0IFNlbnNlbkNvbG9yaW5nIGZyb20gXCIuL2NvbG9yaW5nXCI7XG5pbXBvcnQgeyBTZW5zZW5Db2xvclZhcmlhdGlvbiwgU2Vuc2VuQ29sb3JWYXJpYXRpb25zIH0gZnJvbSBcIi4vaW5kZXgudFwiO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbnNlbkNvbG9ye1xuXG4gICAgbmF0dXJlOiBTZW5zZW5Db2xvck5hdHVyZSA9ICdAcGFsZXR0ZSc7XG5cbiAgICBuYW1lOiBzdHJpbmcgPSAnJztcbiAgICBcbiAgICBzY2hlbWU6IFNlbnNlbkNvbG9yU2NoZW1lQmFzZSA9IHt9IGFzIFNlbnNlbkNvbG9yU2NoZW1lQmFzZTtcblxuICAgIG1peGVkOiBTZW5zZW5Db2xvclZhcmlhdGlvbnMgPSB7fTtcblxuICAgIE1peHR1cmUoKXtcblxuICAgICAgICBpZih0aGlzLnNjaGVtZSl7XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuc2NoZW1lKS5tYXAoaT0+e1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmdiID0gU2Vuc2VuQ29sb3JpbmcuSGV4VG9SR0IoaVsxXSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtaXhlZDogU2Vuc2VuQ29sb3JWYXJpYXRpb24gPSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpWzFdLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZ2I6IGByZ2IoJHtyZ2JbMF19LCR7cmdiWzFdfSwke3JnYlsyXX0pYCxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmdiU21hbGxlcjogYHJnYmEoJHtyZ2JbMF19LCR7cmdiWzFdfSwke3JnYlsyXX0sIC4xKWAsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJnYlNtYWxsOiBgcmdiYSgke3JnYlswXX0sJHtyZ2JbMV19LCR7cmdiWzJdfSwgLjIwKWAsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJnYk1lZGl1bTogYHJnYmEoJHtyZ2JbMF19LCR7cmdiWzFdfSwke3JnYlsyXX0sIC41MClgLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZ2JCaWc6IGByZ2JhKCR7cmdiWzBdfSwke3JnYlsxXX0sJHtyZ2JbMl19LCAuODApYCxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmdiQmlnZ2VyOiBgcmdiYSgke3JnYlswXX0sJHtyZ2JbMV19LCR7cmdiWzJdfSwgLjk2KWAsXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubWl4ZWRbaVswXV0gPSBtaXhlZFxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbn0iXX0=