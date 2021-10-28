using Microsoft.EntityFrameworkCore.Migrations;

namespace AmarDaktar.DataBaseContext.Migrations
{
    public partial class addpropertiesinisapproved : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsApproved",
                table: "Hospitals",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsApproved",
                table: "Hospitals");
        }
    }
}
